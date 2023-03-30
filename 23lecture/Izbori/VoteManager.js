class VoteManager {




    getAllParties = () => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall (SERVER_URL + '/parties', {

            headers: {
                'identity': sessionId
            }
        })
    }

    search = (keyword) => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall (SERVER_URL + '/parties-search', {

            headers: {
                'identity': sessionId,
                'partyName': keyword
            }
        })
    }

    vote = (partyId) => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall (SERVER_URL + `/vote/${partyId}`, {

            method: 'POST',
            headers: {
                'identity': sessionId,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            userManager.loggedUser.hasVoted = true;
            localStorage.setItem('loggedUser', JSON.stringify(userManager.loggedUser));
        })
        .catch(err => alert(err));

    }

    getDetails = (partyId) => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        return makeAPICall(SERVER_URL + `/party/${partyId}`,{
            headers: {
                'identity': sessionId
            }
        })
    }

    getPartyIds = () => {

        const sessionId = JSON.parse(localStorage.getItem('loggedUser')).sessionId;

        let rawResults;

        return makeAPICall(SERVER_URL + '/results', {

            headers: {
                'identity': sessionId

            }
        })
            .then(res => {

                let totalVoters = res.reduce((acc, curr) => {
                    return acc + curr.voters;
                }, 0)

                console.log(totalVoters);

                return res.map(party => {

                    party.voters = Number((party.voters / totalVoters * 100).toFixed(2));
                    return party;

                }).sort((a, b) => {
                    return b.voters - a.voters;
                })

            })
            .then(result => {

                rawResults = result;

                let partyArr = [];

                result.forEach(party => {

                    partyArr.push(this.getDetails(party.partyId));

                });

                return Promise.all(partyArr)
            })
            .then(res => {

                console.log(res);

                for (let i = 0; i < res.length; i++) {

                    rawResults[i].partyId = res[i].name
                }

                return rawResults;
            })
            
    }




}

let voteManager = new VoteManager();