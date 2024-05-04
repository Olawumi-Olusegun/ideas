
export const upvote = (id) => {
    const votes = localStorage.getItem("votes") 
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: []
    }

    if(votes.upvotes.indexOf(id) !== -1) {
        return false;
    }   

    votes.upvotes.push(id);
    votes.downvotes?.filter((item) => item !== id);

    localStorage.setItem("votes", JSON.stringify(votes));

    return true;
}

export const downvote = (id) => {
    const votes = localStorage.getItem("votes") 
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: []
    }

    console.log({indexof: votes.downvotes.indexOf(id)})

    if(votes.downvotes.indexOf(id) !== -1) {
        return false;
    }   

    votes.downvotes.push(id);
    votes.upvotes?.filter((item) => item !== id);

    console.log({votes: votes});

    localStorage.setItem("votes", JSON.stringify(votes));

    return true;
}

export const checkIsAlreadyUpvoted = (id) => {
    const votes = localStorage.getItem("votes") 
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: []
    }

    // const voted = votes.upvotes.findIndex((item) => item == id);
    const voted = votes.upvotes.includes(id);

    // console.log({voted});
    return voted ? true : false;
}

export const checkIsAlreadyDownvoted = (id) => {
    const votes = localStorage.getItem("votes") 
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: []
    }

    // const voted = votes.upvotes.findIndex((item) => item == id);
    const downvoted = votes.downvotes.includes(id);

    // console.log({downvoted});
    return downvoted ? true : false;
}