document.addEventListener("DOMContentLoaded", function () {
    const jobTitles = ["ASP.NET Developer",
        ".NET Lead",
        ".NET Architect",
        "ASP.NET Lead",
        "ASP.NET Architect",
        "Software Engineer",
        "Software Developer",
        "React.JS Developer",
        "Frontend Developer",
        "Backend Developer",
        "Java Developer",
        "Python Developer",
        "MERN Stack Developer",
        "Database Administration",
        "Cloud Administration",
        "Devops Developer",
        "C++ Developer",
        "SQL Developer",
        "SQL Architect",
        "MSSQL Developer",
        "MSSQL Architect",
        "MongoDB Administrator",
        "C Embedded Programming",
        "Compiler Design",
        "C# developer",
        "JavaScript Developer/Design",
        "Angular Framework",
        "Microservices Design/Architect",
        "API architect/building",
        "API Gateway",
        "CI/CD Pipeline",
        "Azure App services"];
    //const locations = ['New York', 'San Francisco', 'Chicago', 'Seattle'];
    const locations = {
        "United States": ["San Francisco", "New York", "Seattle", "Austin"],
        "United Kingdom": ["London", "Manchester", "Bristol", "Edinburgh"],
        "Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        "India": ["Bengaluru", "Hyderabad", "Pune", "Chennai","Gurugram","Noida"],
        "Canada": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        "Australia": ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        "Singapore": ["Singapore"],
        "Russia": ["Moscow","St. Petersburg"],
        "Japan": ["Tokyo", "Osaka", "Kyoto", "Fukuoka"]
    };
    var jobtitleDOM = document.getElementById('job-title');
    var locationDOM = document.getElementById('location');
    function setupAutocomplete(inputElement, suggestions) {
        const suggestionBox = inputElement.getAttribute('id') === 'job-title' ? document.getElementById('job-title-suggestions') : document.getElementById('location-suggestions');
        inputElement.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            suggestionBox.innerHTML = '';

            if (query.length > 0) {
                let filteredSuggestions = [];
                if (inputElement.getAttribute('id') === 'job-title') {
                    filteredSuggestions = suggestions.filter(suggestion =>
                        suggestion.toLowerCase().includes(query)
                    );
                   
                }
                else {
                    for (let [country, cities] of Object.entries(suggestions)) {
                        if (country.toLowerCase().includes(query)) {
                            filteredSuggestions.push(country);
                        }
                        else {
                            cities.forEach(objcity => {
                                if (objcity.toLowerCase().includes(query)) {
                                    filteredSuggestions.push(`${objcity}`, `${country}`);
                                }
                            });
                        }
                    }
                }
                CreateSuggetionBox(filteredSuggestions, suggestionBox, inputElement);
             
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target !== inputElement && e.target !== suggestionBox) {
                suggestionBox.innerHTML = '';
            }
        });
    }

    const jobTitleInput = document.getElementById('job-title');
    const locationInput = document.getElementById('location');

    setupAutocomplete(jobTitleInput, jobTitles);
    setupAutocomplete(locationInput, locations);


    var categoryDOM = document.querySelectorAll('.catagory-list-data');
    categoryDOM.forEach(catagory => function () {
        catagory.style.display = 'none';
    });

});

function CreateSuggetionBox(filteredSuggestions, suggestionBox, inputElement) {
    filteredSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'autocomplete-suggestion';
        suggestionElement.textContent = suggestion;

        suggestionElement.addEventListener('click', function () {
            inputElement.value = this.textContent;
            suggestionBox.innerHTML = '';
        });

        suggestionBox.appendChild(suggestionElement);
    });
}
function showCategory(categoryName) {
    const categories = document.querySelectorAll('.catagory-list-data');
    categories.forEach(category => {
        category.classList.remove('active');
    });
    document.querySelector('.' + categoryName).classList.add('active');
}