"""Personal portfolio — run with: python app.py"""

from flask import Flask, abort, render_template

app = Flask(__name__)

PROFILE = {
    "name": "Palak Sahu",
    "title": "Software Developer",
    "tagline": "I build clean, reliable software and love solving real-world problems.",
    "photo": "profile.svg",
    "contact": {
        "email": "plksahu@email.com",
        "phone": "+917999520180",
        "location": "Jabalpur, India",
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
    },
}

# slug -> skill page (order matches display on home page)
SKILL_PAGES = {
    "python": {
        "name": "Python",
        "summary": "Backend apps, automation, data handling, and APIs built with Python.",
        "projects": [
            {
                "title": "Personal Portfolio Website",
                "description": (
                    "This live site — built with Flask and Jinja2. Each skill opens "
                    "its own projects page. Profile data is managed in Python for easy updates."
                ),
                "tools": ["Python", "Flask", "HTML", "CSS", "Jinja2"],
            },
            {
                "title": "Smart Expense Tracker",
                "description": (
                    "Tracks daily income and spending by category. Shows monthly summaries, "
                    "warns when a budget limit is crossed, and stores records in SQLite."
                ),
                "tools": ["Python", "SQLite", "Tkinter", "Matplotlib"],
            },
            {
                "title": "Library Management System",
                "description": (
                    "Issue and return books, search by title or author, flag overdue items, "
                    "and auto-calculate late fees using OOP and transaction logs."
                ),
                "tools": ["Python", "SQLite", "OOP", "datetime"],
            },
            {
                "title": "Job Listing Web Scraper",
                "description": (
                    "Collects job posts from career sites, cleans HTML, and exports title, "
                    "company, location, and link to CSV with keyword filtering."
                ),
                "tools": ["Python", "BeautifulSoup", "Requests", "CSV"],
            },
        ],
    },
    "javascript": {
        "name": "JavaScript",
        "summary": "Interactive front-end features, DOM apps, and modern ES6+ patterns.",
        "projects": [
            {
                "title": "To-Do List Web App",
                "description": (
                    "Add, edit, complete, and delete tasks in the browser. Tasks persist "
                    "in localStorage so the list survives page refresh."
                ),
                "tools": ["JavaScript", "HTML", "CSS", "localStorage"],
            },
            {
                "title": "Weather Widget",
                "description": (
                    "Calls a weather API with fetch(), shows city temperature and icons, "
                    "and handles loading states and errors gracefully."
                ),
                "tools": ["JavaScript", "Fetch API", "JSON", "DOM"],
            },
            {
                "title": "Quiz Game",
                "description": (
                    "Multiple-choice quiz with score tracking, timer per question, "
                    "and a results screen with retry option."
                ),
                "tools": ["JavaScript", "HTML", "CSS", "Arrays"],
            },
        ],
    },
    "html-css": {
        "name": "HTML & CSS",
        "summary": "Responsive layouts, accessible markup, and polished visual design.",
        "projects": [
            {
                "title": "Responsive Landing Page",
                "description": (
                    "Marketing-style landing page with hero, features grid, testimonials, "
                    "and footer. Uses Flexbox and CSS Grid with a mobile-first layout."
                ),
                "tools": ["HTML5", "CSS3", "Flexbox", "Grid"],
            },
            {
                "title": "Portfolio UI Theme",
                "description": (
                    "Dark-themed design system with custom properties, rounded cards, "
                    "hover states, and consistent typography for this portfolio."
                ),
                "tools": ["HTML", "CSS Variables", "Responsive Design"],
            },
            {
                "title": "Accessible Contact Form",
                "description": (
                    "Form with labels, focus styles, validation messages, and keyboard-friendly "
                    "navigation following basic accessibility practices."
                ),
                "tools": ["HTML", "CSS", "ARIA", "Forms"],
            },
        ],
    },
    "flask": {
        "name": "Flask",
        "summary": "Lightweight Python web apps with routes, templates, and clean structure.",
        "projects": [
            {
                "title": "Portfolio Web App",
                "description": (
                    "Multi-page Flask app with dynamic skill routes, Jinja templates, "
                    "static assets, and profile data passed from Python."
                ),
                "tools": ["Flask", "Jinja2", "Python", "Routing"],
            },
            {
                "title": "Blog API (Mini)",
                "description": (
                    "CRUD routes for posts: list, create, read, update, delete. Returns HTML "
                    "pages and demonstrates request handling and 404 errors."
                ),
                "tools": ["Flask", "Python", "HTTP", "Templates"],
            },
        ],
    },
    "git": {
        "name": "Git",
        "summary": "Version control workflow for personal and team projects.",
        "projects": [
            {
                "title": "Portfolio Repository",
                "description": (
                    "Project tracked with Git: feature branches for skills pages, "
                    "clear commit messages, and .gitignore for Python virtual env files."
                ),
                "tools": ["Git", "GitHub", "Branches", "Commits"],
            },
            {
                "title": "Collaborative Practice",
                "description": (
                    "Used pull requests, merge conflict resolution, and git log to review "
                    "history when working on shared practice repos."
                ),
                "tools": ["Git", "Pull Requests", "Merge", "git log"],
            },
        ],
    },
    "sql": {
        "name": "SQL",
        "summary": "Relational data design, queries, and persistence for applications.",
        "projects": [
            {
                "title": "Library Database Schema",
                "description": (
                    "Tables for books, members, and loans with foreign keys. Queries for "
                    "available books, overdue loans, and member borrowing history."
                ),
                "tools": ["SQL", "SQLite", "JOIN", "Schema Design"],
            },
            {
                "title": "Expense Tracker Tables",
                "description": (
                    "Designed categories and transactions tables. Wrote SELECT, INSERT, "
                    "UPDATE, and aggregate queries for monthly reports."
                ),
                "tools": ["SQL", "SQLite", "Aggregates", "Indexes"],
            },
        ],
    },
    "rest-apis": {
        "name": "REST APIs",
        "summary": "HTTP APIs with JSON, status codes, and client-server communication.",
        "projects": [
            {
                "title": "Task Manager REST API",
                "description": (
                    "Flask API with GET/POST/PUT/DELETE for tasks. Returns JSON, uses "
                    "proper status codes (200, 201, 404), and documents endpoints."
                ),
                "tools": ["Flask", "REST", "JSON", "HTTP Methods"],
            },
            {
                "title": "Weather API Consumer",
                "description": (
                    "Python and JavaScript clients that call a public weather API, parse "
                    "JSON responses, and display formatted results to the user."
                ),
                "tools": ["REST", "JSON", "Requests", "Fetch API", "DRF REST"],
           
            },
        ],
    },
    "problem-solving": {
        "name": "Problem Solving",
        "summary": "Breaking down problems, debugging, and building step-by-step solutions.",
        "projects": [
            {
                "title": "Algorithm Practice",
                "description": (
                    "Solved array, string, and logic problems on coding platforms. Focused on "
                    "time complexity, edge cases, and writing readable solutions."
                ),
                "tools": ["Python", "Logic", "Big O", "Testing"],
            },
            {
                "title": "Debug & Fix Workflow",
                "description": (
                    "Used print/logging, breakpoints, and reading stack traces to fix bugs "
                    "in Flask routes and JavaScript UI interactions."
                ),
                "tools": ["Debugging", "Logs", "Testing", "Documentation"],
            },
            {
                "title": "Project Planning",
                "description": (
                    "Split portfolio work into small tasks: data model, routes, templates, "
                    "styling — then built and tested each part before moving on."
                ),
                "tools": ["Planning", "Milestones", "Iteration", "Review"],
            },
        ],
    },
}

SKILL_ORDER = [
    "python",
    "javascript",
    "html-css",
    "flask",
    "git",
    "sql",
    "rest-apis",
    "problem-solving",
]

ARTICLES = [
    {
        "slug": "why-i-started-with-python",
        "title": "Why I Started with Python (And Stuck With It)",
        "excerpt": (
            "Python felt friendly on day one. Here's what kept me learning "
            "after the hello-world phase faded."
        ),
        "date": "2026-04-18",
        "read_time": 4,
        "categories": ["Python", "Tips"],
        "content": [
            "When I first opened a Python file, the syntax made sense almost immediately. No semicolons, readable loops, and errors that usually pointed me in the right direction.",
            "What really hooked me was building small things that worked: a grade calculator, a file organizer, then a simple web page with Flask. Each project was small enough to finish in a weekend but taught something new.",
            "My advice if you're starting out: pick one language, build tiny projects weekly, and read other people's code on GitHub. Python rewards consistency more than talent on day one.",
        ],
    },
    {
        "slug": "flask-routes-made-simple",
        "title": "Flask Routes Made Simple",
        "excerpt": (
            "How I think about routes, templates, and passing data — "
            "using this portfolio as a real example."
        ),
        "date": "2026-04-10",
        "read_time": 6,
        "categories": ["Python", "Web Dev", "Flask"],
        "content": [
            "A route is just a URL mapped to a Python function. When someone visits `/skills/python`, Flask calls my `skill_page` function and returns HTML.",
            "I keep data in Python dictionaries (like `SKILL_PAGES` and `ARTICLES`) and pass them into Jinja templates. That way the HTML stays clean and I don't hard-code content in multiple places.",
            "The biggest lesson: one route, one job. Home page shows the profile. Blog page lists articles. Article page shows one post. Simple structure scales better than one giant file.",
        ],
    },
    {
        "slug": "dark-mode-without-a-framework",
        "title": "Adding Dark Mode Without a Framework",
        "excerpt": (
            "CSS variables, a moon/sun toggle, and localStorage — "
            "how this site remembers your theme choice."
        ),
        "date": "2026-03-28",
        "read_time": 5,
        "categories": ["Web Dev", "Tips"],
        "content": [
            "I defined colors as CSS custom properties on `[data-theme=\"dark\"]` and `[data-theme=\"light\"]`. Switching themes means changing one attribute on the `<html>` element.",
            "A small script in the page `<head>` reads `localStorage` before paint so you don't get a flash of the wrong theme on refresh.",
            "Transitions on `background-color` and `color` make the switch feel smooth instead of jarring. Total JavaScript: about 20 lines. No React required.",
        ],
    },
    {
        "slug": "debugging-like-a-developer",
        "title": "How I Debug When Code Breaks",
        "excerpt": (
            "Print statements, reading tracebacks, and checking one thing at a time — "
            "my practical debugging checklist."
        ),
        "date": "2026-03-15",
        "read_time": 5,
        "categories": ["Tips", "Python"],
        "content": [
            "When something fails, I read the last line of the traceback first. It usually names the file and line number where things went wrong.",
            "Then I reproduce the bug with the smallest possible input. If a form breaks, I test the route with curl or a simple GET before touching the front end.",
            "I keep a notes file of bugs I've fixed before. Half of debugging is recognizing a pattern you've already seen.",
        ],
    },
    {
        "slug": "from-tutorial-to-real-project",
        "title": "From Tutorial to Real Project",
        "excerpt": (
            "Tutorials teach syntax. A personal project teaches decisions, "
            "structure, and how to fix your own mistakes."
        ),
        "date": "2026-02-22",
        "read_time": 7,
        "categories": ["Web Dev", "Tips"],
        "content": [
            "I followed plenty of courses, but this portfolio was the first thing that felt truly mine. I chose the layout, the features, and the order I built them in.",
            "Real projects force you to handle boring details: restarting the server, fixing empty data, making buttons actually clickable. Tutorials often skip that.",
            "If you're learning web dev, clone a tutorial once, then build something different with the same tools. Change one variable at a time until you understand why it works.",
        ],
    },
    {
        "slug": "git-commits-that-help-future-you",
        "title": "Git Commits That Help Future You",
        "excerpt": (
            "Short, clear commit messages and small changes per commit — "
            "habits that saved me when I broke something."
        ),
        "date": "2026-02-08",
        "read_time": 4,
        "categories": ["Tips"],
        "content": [
            "I used to commit everything with messages like \"fix\" or \"update\". A week later I had no idea what changed.",
            "Now I write commits like: \"Add blog route and article cards\" or \"Fix empty skills list on home page\". Future me can scan `git log` and know what happened.",
            "Small commits also make it easier to undo one change without losing a whole day's work. Git is a safety net, not just a upload button.",
        ],
    },
]


def get_articles_sorted():
    return sorted(ARTICLES, key=lambda a: a["date"], reverse=True)


def get_article(slug):
    for article in ARTICLES:
        if article["slug"] == slug:
            return article
    return None


def get_skill_links():
    return [
        {"name": SKILL_PAGES[slug]["name"], "slug": slug}
        for slug in SKILL_ORDER
    ]


@app.context_processor
def inject_skills():
    """Always provide skills to templates (avoids empty list if route forgets)."""
    return {"skills": get_skill_links()}


@app.route("/")
def index():
    articles = get_articles_sorted()[:3]
    return render_template("index.html", profile=PROFILE, articles=articles)


@app.route("/blog", endpoint="blog")
def blog_list():
    return render_template(
        "blog.html",
        profile=PROFILE,
        articles=get_articles_sorted(),
    )


@app.route("/blog/<slug>", endpoint="article_page")
def article_detail(slug):
    article = get_article(slug)
    if not article:
        abort(404)
    return render_template(
        "article.html",
        profile=PROFILE,
        article=article,
    )


@app.route("/skills/<slug>")
def skill_page(slug):
    skill = SKILL_PAGES.get(slug)
    if not skill:
        abort(404)
    other_skills = [
        {"name": SKILL_PAGES[s]["name"], "slug": s}
        for s in SKILL_ORDER
        if s != slug
    ]
    return render_template(
        "skill_projects.html",
        profile=PROFILE,
        skill=skill,
        other_skills=other_skills,
    )


@app.after_request
def no_cache_html(response):
    if response.content_type and "text/html" in response.content_type:
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate"
    return response


if __name__ == "__main__":
    import webbrowser
    from threading import Timer

    def open_browser():
        webbrowser.open("http://127.0.0.1:5000")

    print(f"Starting portfolio for: {PROFILE['name']}")
    print("Portfolio running at http://127.0.0.1:5000")
    print("Routes:", ", ".join(sorted(rule.endpoint for rule in app.url_map.iter_rules() if rule.endpoint != "static")))
    print("After saving app.py: press Ctrl+C, then run: python app.py")
    app.run(debug=True, port=5000, use_reloader=False)
