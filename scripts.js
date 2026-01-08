/* =====================================================
   UTILITIES
===================================================== */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* =====================================================
   PREVENT BACK NAVIGATION (LOGIN SAFE)
===================================================== */
history.pushState(null, null, location.href);
window.onpopstate = () => history.pushState(null, null, location.href);

/* =====================================================
   GLOBAL STATE
===================================================== */
const state = {
    email: localStorage.getItem("loggedInEmail"),
    username: localStorage.getItem("loggedInUserName"),
    isGuest: !localStorage.getItem("loggedInEmail")
};


/* =====================================================
   SECTION NAVIGATION
===================================================== */
function showSection(sectionId) {
    $$("main > section").forEach(sec => {
        sec.style.display = "none";
        sec.classList.remove("active-section");
    });

    const target = document.getElementById(sectionId);
    if (!target) return;

    target.style.display = "block";
    target.classList.add("active-section");
    setActiveSidebar(sectionId);
}

function setActiveSidebar(sectionId) {
    $$(".sidebar .nav-link").forEach(link => link.classList.remove("active"));
    const active = document.querySelector(`.sidebar .nav-link[data-section="${sectionId}"]`);
    if (active) active.classList.add("active");
}

/* =====================================================
   PROTECTED SECTIONS (GUEST MODE)
===================================================== */
function openProtectedSection(sectionId) {
    const protectedSections = [
        "compiler",
        "visualizer",
        "notifications",
        "user-communication",
        "dashboard"
    ];

    if (state.isGuest && protectedSections.includes(sectionId)) {
        showGuestMessage();
        return;
    }
    showSection(sectionId);
}

/* =====================================================
   GUEST MODAL
===================================================== */
function showGuestMessage() {
    $("#guest-message-overlay").style.display = "flex";
    document.body.classList.add("guest-modal-open");
}

function closeGuestMessage() {
    $("#guest-message-overlay").style.display = "none";
    document.body.classList.remove("guest-modal-open");
}

function goToLogin() {
    window.location.href = "index.html";
}

/* =====================================================
   THEME HANDLING
===================================================== */
function setTheme(mode) {
    document.body.classList.toggle("light-mode", mode === "light");
    localStorage.setItem("theme", mode);
    updateThemeButton();
    updateCompilerSelectColor();
}

function updateThemeButton() {
    const btn = $("#theme-toggle");
    if (!btn) return;
    btn.textContent = document.body.classList.contains("light-mode")
        ? "Dark Mode"
        : "Light Mode";
}

$("#theme-toggle")?.addEventListener("click", () => {
    setTheme(document.body.classList.contains("light-mode") ? "dark" : "light");
});

/* =====================================================
   COMPILER SELECT COLOR
===================================================== */
function updateCompilerSelectColor() {
    const select = $("#compiler-language");
    if (!select) return;

    if (document.body.classList.contains("light-mode")) {
        select.style.background = "#fff";
        select.style.color = "#222";
    } else {
        select.style.background = "";
        select.style.color = "";
    }
}

/* =====================================================
   FULLSCREEN (REUSABLE)
===================================================== */
function initFullscreen(btnId, targetId, iconId, labelId) {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetId);
    const icon = document.getElementById(iconId);
    const label = document.getElementById(labelId);

    if (!btn || !target) return;

    btn.onclick = () => {
        if (!document.fullscreenElement) {
            target.requestFullscreen();
            if (icon) icon.textContent = "❌";
            if (label) label.textContent = "Exit Fullscreen";
        } else {
            document.exitFullscreen();
        }
    };

    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement && icon && label) {
            icon.textContent = "🖥️";
            label.textContent = "Fullscreen View";
        }
    });
}

/* =====================================================
   COURSE CONTENT SWITCHER (ALL COURSES)
===================================================== */

const searchInput = document.querySelector("header input[type='text']");
const courseCards = document.querySelectorAll(".my-courses .course-card");
const noCourseMsg = document.getElementById("no-course-message");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        // 🔥 Always open Courses section when searching
        showSection("courses");

        let found = false;

        courseCards.forEach(card => {
            const title = card.textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "flex";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        if (noCourseMsg) {
            noCourseMsg.style.display = found ? "none" : "block";
        }
    });
}

/* =====================================================
   COURSE CONTENT SWITCHER (FINAL – WORKING)
===================================================== */

function switchCourseTab(course, tab) {
    // 1️⃣ Hide all content blocks
    document
        .querySelectorAll(`#${course}-course .${course}-content-block`)
        .forEach(block => {
            block.style.display = "none";
        });

    // 2️⃣ Show selected block
    const target = document.getElementById(`${course}-content-${tab}`);
    if (target) {
        target.style.display = "block";
    } else {
        console.error("Target not found:", `${course}-content-${tab}`);
    }

    // 3️⃣ Update sidebar active state
    document
        .querySelectorAll(`#${course}-course .course-topic`)
        .forEach(btn => btn.classList.remove("active"));

    const sidebar = document.querySelector(`#${course}-course .course-sidebar`);
if (sidebar) {
    const buttons = sidebar.querySelectorAll(".course-topic");
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(tab)) {
            btn.classList.add("active");
        }
    });
}

}
function showJavaContent(tab) {
    switchCourseTab("java", tab);
}

function showCppContent(tab) {
    switchCourseTab("cpp", tab);
}

function showPythonContent(tab) {
    switchCourseTab("python", tab);
}

function showCContent(tab) {
    switchCourseTab("c", tab);
}

function showHtmlContent(tab) {
    switchCourseTab("html", tab);
}

function showSqlContent(tab) {
    switchCourseTab("sql", tab);
}

function showReactContent(tab) {
    switchCourseTab("react", tab);
}

function showAwsContent(tab) {
    switchCourseTab("aws", tab);
}

function showDbmsContent(tab) {
    switchCourseTab("dbms", tab);
}

function showDsContent(tab) {
    switchCourseTab("ds", tab);
}

function showDataAnalysisContent(tab) {
    switchCourseTab("data-analysis", tab);
}

function showNodejsContent(tab) {
    switchCourseTab("nodejs", tab);
}

function showFigmaContent(tab) {
    switchCourseTab("figma", tab);
}

function showEthicalHackingContent(tab) {
    switchCourseTab("ethical-hacking", tab);
}

function showPhotoshopContent(tab) {
    switchCourseTab("photoshop", tab);
}

function showDesignThinkingContent(tab) {
    switchCourseTab("design-thinking", tab);
}



/* =====================================================
   SETTINGS
===================================================== */
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

/* =====================================================
   DOM READY
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

    /* Theme */
    setTheme(localStorage.getItem("theme") || "dark");

    /* Guest / User Info */
    if ($("#settings-username")) {
        $("#settings-username").textContent = state.isGuest ? "Guest" : state.username || "N/A";
        $("#settings-email").textContent = state.isGuest ? "Guest" : state.email || "N/A";
    }

    if (state.isGuest) {
        $("#current-password")?.setAttribute("disabled", true);
        $("#change-password")?.setAttribute("disabled", true);
    }

    /* Fullscreen Init */
    initFullscreen("toggle-fullscreen", "compiler", "compiler-fullscreen-icon", "compiler-fullscreen-label");
    initFullscreen("toggle-visualizer-fullscreen", "visualizer");
    initFullscreen("toggle-concept-fullscreen", "java-content-concepts", "fullscreen-icon", "fullscreen-label");

    /* Default Section */
    showSection("home");
});

/* =====================================================
   VISUALIZER
===================================================== */
function runVisualizer() {
    const code = $("#visualizer-editor").value.trim();
    let lang = $("#visualizer-language").value;

    if (!code) {
        alert("Please enter code");
        return;
    }

    const iframe = $("#visualizer-frame");
    const src =
        `https://pythontutor.com/iframe-embed.html#code=${encodeURIComponent(code)}&py=${lang}&mode=edit`;

    iframe.src = "";
    setTimeout(() => iframe.src = src, 100);
}

/* =====================================================
   COMPILER
===================================================== */
function attachCompilerButtonListener() {
    const runBtn = $(".compiler-run-btn");
    const editor = $(".compiler-editor");
    const output = $(".compiler-output");
    const langSel = $("#compiler-language");
    const inputField = $("#compiler-user-input");

    if (!runBtn) return;

    runBtn.onclick = async () => {
        runBtn.textContent = "Running...";
        runBtn.disabled = true;

        try {
            const res = await fetch("http://localhost:3888/compile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: editor.value,
                    language: langSel.value,
                    stdin: inputField?.value || ""
                })
            });

            const data = await res.json();
            output.textContent = data.output || data.message;
        } catch (err) {
            output.textContent = err.message;
        } finally {
            runBtn.textContent = "Run";
            runBtn.disabled = false;
        }
    };
}
attachCompilerButtonListener();

/* =====================================================
   CHAT SWITCHER
===================================================== */
function showChat(type) {
    $("#public-chat").style.display = type === "public" ? "block" : "none";
    $("#private-chat").style.display = type === "private" ? "block" : "none";
}
function loadJavaConcept(conceptKey) {
    const container = document.getElementById("java-concept-content");

    if (!container) {
        console.error("java-concept-content not found");
        return;
    }

    const content = javaConceptData[conceptKey];

    if (!content) {
        container.innerHTML = "<p>No data available for this concept.</p>";
        return;
    }

    container.innerHTML = `
        <div class="concept-view-card">
            ${content}
        </div>
    `;
}
function loadJavaConcept(concept) {
    const contentArea = document.getElementById("java-concept-content");

    if (!contentArea) {
        console.error("❌ java-concept-content not found");
        return;
    }

    const filePath = `concepts/java/${concept}.html`;

    fetch(filePath)
        .then(res => {
            if (!res.ok) {
                throw new Error(`File not found: ${filePath}`);
            }
            return res.text();
        })
        .then(html => {
            contentArea.innerHTML = html;
        })
        .catch(err => {
            console.error(err);
            contentArea.innerHTML = `
                <div style="padding:16px;color:red;">
                    ❌ Content not available for <b>${concept}</b>
                </div>
            `;
        });
}
