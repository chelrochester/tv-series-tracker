# TV Series Tracker
![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Table of contents
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Pulling the Latest Changes](#pulling-the-latest-changes)
  - [Working on a New Feature or Bugfix](#working-on-a-new-feature-or-bugfix)
  - [Committing Your Changes](#committing-your-changes)
  - [Pushing Changes to Remote](#pushing-changes-to-remote)
  - [Creating a Pull Request](#creating-a-pull-request)
  - [Deploying to Production](#deploying-to-production)
  - [Landing Page](#landing-page)
  - [Link to live page](#links)
  - [What I've Learned](#what-ive-learned)
  - [Fetching Data](#fetching-data)
  - [Handling Forms](#handling-forms)

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [React.js](https://reactjs.org/)

### Installation
1. Clone the repository to your local machine:

   ```git clone git@github.com:chelrochester/tv-series-tracker.git```

2. Navigate to the project directory:

```cd tv-series-tracker```

3. Install the project dependencies:

```npm install```

### Pulling the Latest Changes
Before starting any new work, ensure you have the latest changes from the main repository:

```git pull origin main```

### Working on a New Feature or Bugfix
Create a new branch for your work to keep the main branch clean:

```git checkout -b feature/your-feature-name```

### Committing Your Changes
Commit your changes with a clear and concise commit message:

```git add .```
```git commit -m "Add your commit message here"```

### Pushing Changes to Remote
Push your changes to the remote repository:

```git push origin feature/your-feature-name```

### Creating a Pull Request
Once your feature or bugfix is complete, create a pull request from your branch to the main branch on GitHub.

### Deploying to Production
To push the changes to the production environment, follow the deployment guidelines of your project. For example:

```git checkout main```
```git merge feature/your-feature-name```
```git push origin main```



## Landing Page

Before posts:
![image](https://github.com/chelrochester/tv-tracker-series/assets/50529205/5ce38df8-4069-4cd7-85fc-20d0a5767aff)

After posts:
![image](https://github.com/chelrochester/TVTrackerImage/blob/main/tv-tracker-complete.png?raw=true)

## Links

- Link to live site: [tv tracker](https://tvtracker-chelrochester.netlify.app/)

## What I've Learned

-Fetching data
-Handling forms

## Fetching Data

useEffect(() => {
        async function fetchSeries() {
            if (queryEnabled && searchTerm) {
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
                const data = await response.json();
                const exactMatch = data.find(item => item.show.name.toLowerCase() === searchTerm.toLowerCase());
                if (exactMatch) {
                    setPosts((existingPosts) => {
                        const postExists = existingPosts.some(post => post.id === exactMatch.show.id);
                        if (!postExists) {
                            return [exactMatch.show, ...existingPosts];
                        }
                        return existingPosts;
                    });
                }
                setQueryEnabled(false);
                onStopPosting();
            }
        }
        fetchSeries();
    }, [queryEnabled, searchTerm, onStopPosting]);

## Handling forms

export default function Form({ onCancel, onSearch }) {
    const searchElement = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        const searchTerm = searchElement.current.value;
        onSearch(searchTerm);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor="series" className="label">Search for series:</label>
            <input type="text" ref={searchElement} />
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    );
}



