let getForms = async () => {
    const response = await fetch('../assets/json/forms.json');
    const data = await response.json();
    return data;
}

export default getForms;