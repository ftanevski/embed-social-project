let getSubmissions = async () => {
    let response = await fetch('./submissions.json');
    let submissions = await response.json();
    return submissions; 
}

export default getSubmissions;