# SkillNest LMS

SkillNest is a modern **Frontend Learning Management System (LMS)** built with **React.js and Tailwind CSS**. It allows students to browse and search courses, view detailed course information, explore chapter-wise lectures, watch video previews, view enrolled courses, track learning progress, and rate courses.

The project focuses on creating a clean, responsive, and interactive learning experience using reusable React components and Context API.

## Features

* Browse available courses
* Search courses by title
* View detailed course information
* View course ratings and number of ratings
* View course pricing and discount calculation
* Explore chapter-wise course curriculum
* Expand and collapse course chapters
* Preview free lectures using an embedded YouTube player
* View enrolled courses
* Track course lecture progress
* Display course completion status
* Watch enrolled course lectures
* Interactive 5-star course rating
* Responsive design across mobile, tablet, and desktop
* Reusable React components
* Client-side routing with React Router
* Global course data and utilities using Context API

## Tech Stack

**Frontend**

* [React 19](https://react.dev/) — component-based UI development
* [React Router](https://reactrouter.com/) — client-side routing
* [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
* [Vite](https://vitejs.dev/) — development server and build tool
* JavaScript (ES6+)
* HTML5
* CSS3

**Libraries**

* [react-youtube](https://github.com/tjallingt/react-youtube) — embedded YouTube video player for lectures
* [humanize-duration](https://github.com/EvanHahn/HumanizeDuration.js) — converts lecture duration into readable format
* [rc-progress](https://github.com/react-component/progress) — course progress bars

**Development Tools**

* ESLint — code linting
* Git — version control
* GitHub — source code hosting

## Prerequisites

Before running the project, make sure you have:

* [Node.js](https://nodejs.org/) installed
* npm installed (comes with Node.js)
* Git installed

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

Navigate to the project directory:

```bash
cd YOUR_REPOSITORY_NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

| Script            | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Starts the development server with hot reload   |
| `npm run build`   | Builds the application for production           |
| `npm run lint`    | Runs ESLint to check code quality               |
| `npm run preview` | Serves the production build locally for preview |

## Project Structure

```text
src/
│
├── assets/
│   └── assets.js
│
├── components/
│   └── student/
│       ├── CourseCard.jsx
│       ├── CourseSection.jsx
│       ├── Footer.jsx
│       ├── Loading.jsx
│       ├── Rating.jsx
│       └── SearchBar.jsx
│
├── context/
│   └── AppContect.jsx
│
├── pages/
│   └── student/
│       ├── CourseDetail.jsx
│       ├── CoursesList.jsx
│       ├── MyEnrollments.jsx
│       └── Player.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Main Pages

### Home / Course Section

Displays featured courses using reusable `CourseCard` components. Users can navigate to the complete course list.

### Course List

Displays all available courses and provides course search functionality based on the course title.

### Course Details

Provides detailed information about a selected course, including:

* Course title
* Course description
* Course ratings
* Number of ratings
* Instructor information
* Course curriculum
* Chapters and lectures
* Lecture duration
* Free lecture previews
* Course price
* Discounted price
* Enrollment interface

### My Enrollments

Displays the courses enrolled by the student along with:

* Course thumbnail
* Course duration
* Completed lectures
* Total lectures
* Progress bar
* Course status
* Continue learning button

### Course Player

Provides the learning interface for enrolled courses with:

* Chapter-wise curriculum
* Lecture list
* YouTube video player
* Lecture duration
* Watch lecture functionality
* Course rating interface
* Lecture completion interface

## Course Search

Courses can be searched by their title.

The course list dynamically filters available courses based on the search input.

Example:

```text
/course-list/react
```

This displays courses matching the search term.

## Course Rating

The application includes a reusable five-star rating component.

```text
★ ★ ★ ★ ★
```

The `Rating` component uses React state to manage the selected rating and can optionally receive an `onRate` callback.

## Course Progress

The My Enrollments page displays the student's lecture completion progress.

Example:

```text
4 / 10 Lectures
```

Progress is visually represented using the `rc-progress` library.

## YouTube Lecture Player

The project uses `react-youtube` to embed lecture videos.

Free preview lectures can be watched directly from the course details page, while enrolled users can watch lectures through the course player.

## Responsive Design

SkillNest is designed to provide a responsive experience across:

* Mobile devices
* Tablets
* Desktop screens

Tailwind CSS responsive utilities are used throughout the application to adapt layouts to different screen sizes.

## State Management

The project uses **React Context API** through `AppContext` for sharing application-level data and utility functions such as:

* Available courses
* Enrolled courses
* Currency
* Course rating calculation
* Course duration calculation
* Lecture count calculation
* Chapter duration calculation
* Navigation

## Future Improvements

The current version is a **frontend-focused LMS project**. Possible future improvements include:

* Backend API integration
* Database integration
* User authentication
* Real course enrollment
* Payment gateway integration
* Persistent lecture progress
* Persistent course ratings
* Instructor dashboard
* Admin dashboard
* Course creation and management
* Course completion certificates
* Wishlist functionality
* Notifications
* Advanced course filtering

## Learning Outcomes

This project helped in practicing:

* React functional components
* React Hooks
* `useState`
* `useEffect`
* `useContext`
* React Router
* Context API
* Props
* Conditional rendering
* Dynamic rendering
* Array `map()` and `filter()`
* Reusable component architecture
* Responsive UI development
* Tailwind CSS
* YouTube video integration
* Course progress tracking UI
* Interactive rating components

## Author

**Harsh Bhatnagar**

Frontend Developer

**Technologies:** React.js • JavaScript • Tailwind CSS • HTML • CSS

---

 If you find this project useful or interesting, consider giving the repository a star.
