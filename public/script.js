// Mock data for demonstration
const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password12345' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password123' }
];

const mockDomains = {
    'web-dev': {
        title: 'Web Development',
        icon: 'fa-code',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' },
            { id: 2, name: 'Jane Smith', role: 'Instructor' }
        ],
        courses: [
            { id: 1, title: 'HTML & CSS Basics', progress: 75 },
            { id: 2, title: 'JavaScript Fundamentals', progress: 30 },
            { id: 3, title: 'React.js Masterclass', progress: 45 }
        ],
        projects: [
            { id: 1, title: 'Personal Portfolio', status: 'In Progress' },
            { id: 2, title: 'E-commerce Website', status: 'Completed' }
        ]
    },
    'ai': {
        title: 'Artificial Intelligence',
        icon: 'fa-brain',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' }
        ],
        courses: [
            { id: 1, title: 'Introduction to AI', progress: 50 },
            { id: 2, title: 'Machine Learning Basics', progress: 20 },
            { id: 3, title: 'Deep Learning with Python', progress: 15 }
        ],
        projects: [
            { id: 1, title: 'Image Classification', status: 'In Progress' }
        ]
    },
    'data-science': {
        title: 'Data Science',
        icon: 'fa-database',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' },
            { id: 2, name: 'Jane Smith', role: 'Instructor' }
        ],
        courses: [
            { id: 1, title: 'Python for Data Science', progress: 60 },
            { id: 2, title: 'Data Visualization', progress: 40 },
            { id: 3, title: 'Statistical Analysis', progress: 25 }
        ],
        projects: [
            { id: 1, title: 'Data Analysis Dashboard', status: 'In Progress' }
        ]
    },
    'mobile-dev': {
        title: 'Mobile Development',
        icon: 'fa-mobile-alt',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' }
        ],
        courses: [
            { id: 1, title: 'iOS Development', progress: 35 },
            { id: 2, title: 'Android Development', progress: 45 },
            { id: 3, title: 'React Native', progress: 20 }
        ],
        projects: [
            { id: 1, title: 'Fitness App', status: 'In Progress' }
        ]
    },
    'cybersecurity': {
        title: 'Cybersecurity',
        icon: 'fa-shield-alt',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' },
            { id: 2, name: 'Jane Smith', role: 'Instructor' }
        ],
        courses: [
            { id: 1, title: 'Network Security', progress: 55 },
            { id: 2, title: 'Ethical Hacking', progress: 30 },
            { id: 3, title: 'Security Protocols', progress: 40 }
        ],
        projects: [
            { id: 1, title: 'Security Audit Tool', status: 'In Progress' }
        ]
    },
    'cloud-computing': {
        title: 'Cloud Computing',
        icon: 'fa-cloud',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' }
        ],
        courses: [
            { id: 1, title: 'AWS Fundamentals', progress: 65 },
            { id: 2, title: 'Azure Services', progress: 40 },
            { id: 3, title: 'Cloud Architecture', progress: 25 }
        ],
        projects: [
            { id: 1, title: 'Cloud Migration', status: 'In Progress' }
        ]
    },
    'blockchain': {
        title: 'Blockchain',
        icon: 'fa-link',
        members: [
            { id: 1, name: 'John Doe', role: 'Student' },
            { id: 2, name: 'Jane Smith', role: 'Instructor' }
        ],
        courses: [
            { id: 1, title: 'Blockchain Basics', progress: 70 },
            { id: 2, title: 'Smart Contracts', progress: 45 },
            { id: 3, title: 'DApp Development', progress: 30 }
        ],
        projects: [
            { id: 1, title: 'NFT Marketplace', status: 'In Progress' }
        ]
    }
};

const mockNews = [
    { 
        id: 1, 
        title: 'New Web Development Course Available', 
        date: '2024-03-15',
        category: 'Web Development',
        description: 'Learn modern web development with our new comprehensive course covering HTML5, CSS3, and JavaScript ES6+.'
    },
    { 
        id: 2, 
        title: 'AI Workshop Next Week', 
        date: '2024-03-14',
        category: 'Artificial Intelligence',
        description: 'Join our hands-on workshop on machine learning and neural networks. Perfect for beginners!'
    },
    { 
        id: 3, 
        title: 'Data Science Certification Program', 
        date: '2024-03-13',
        category: 'Data Science',
        description: 'Get certified in Data Science with our new program. Includes Python, R, and advanced analytics.'
    },
    { 
        id: 4, 
        title: 'Mobile App Development Bootcamp', 
        date: '2024-03-12',
        category: 'Mobile Development',
        description: 'Intensive 8-week bootcamp covering iOS and Android development. Limited seats available!'
    },
    { 
        id: 5, 
        title: 'Cybersecurity Summit 2024', 
        date: '2024-03-11',
        category: 'Cybersecurity',
        description: 'Annual cybersecurity summit featuring industry experts and hands-on workshops.'
    },
    { 
        id: 6, 
        title: 'Cloud Computing Masterclass', 
        date: '2024-03-10',
        category: 'Cloud Computing',
        description: 'Master cloud computing with AWS, Azure, and Google Cloud Platform in this comprehensive course.'
    },
    { 
        id: 7, 
        title: 'Blockchain Development Workshop', 
        date: '2024-03-09',
        category: 'Blockchain',
        description: 'Learn to build decentralized applications and smart contracts in our upcoming workshop.'
    }
];

// DOM Elements
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const navLinks = document.querySelectorAll('.nav-links a');
const domainCards = document.querySelectorAll('.domain-card');
const domainDetails = document.getElementById('domainDetails');
const backButton = document.querySelector('.back-button');
const logoutButton = document.getElementById('logout');

// Current user state
let currentUser = null;

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainContent();
    }

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const user = mockUsers.find(u => u.email === email && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            showMainContent();
        } else {
            alert('Invalid credentials');
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        // Check if email already exists
        if (mockUsers.some(u => u.email === email)) {
            alert('Email already registered');
            return;
        }

        const newUser = {
            id: mockUsers.length + 1,
            name,
            email,
            password
        };

        mockUsers.push(newUser);
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        showMainContent();
    });

    // Show/Hide Register/Login sections
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                showSection(section);
                if (section === 'messages') {
                    initializeChat();
                }
            }
        });
    });

    // Domain cards
    domainCards.forEach(card => {
        card.addEventListener('click', () => {
            const domain = card.dataset.domain;
            showDomainDetails(domain);
        });
    });

    // Back button
    backButton.addEventListener('click', () => {
        domainDetails.classList.add('hidden');
        document.getElementById('domainsSection').classList.remove('hidden');
    });

    // Logout
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentUser = null;
        localStorage.removeItem('currentUser');
        showLoginSection();
    });
});

// Functions
function showMainContent() {
    loginSection.classList.add('hidden');
    registerSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    showSection('domains');
    loadNews();
}

function showLoginSection() {
    mainContent.classList.add('hidden');
    loginSection.classList.remove('hidden');
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    const selectedSection = document.getElementById(`${sectionName}Section`);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionName) {
            link.classList.add('active');
        }
    });
}

function showDomainDetails(domainId) {
    const domain = mockDomains[domainId];
    if (!domain) return;

    // Hide domains section and show details
    document.getElementById('domainsSection').classList.add('hidden');
    domainDetails.classList.remove('hidden');

    // Update domain info
    document.getElementById('domainTitle').textContent = domain.title;
    document.getElementById('memberCount').textContent = domain.members.length;
    document.getElementById('courseCount').textContent = domain.courses.length;

    // Update courses list
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = domain.courses.map(course => `
        <div class="course-item">
            <h4>${course.title}</h4>
            <div class="progress-bar">
                <div class="progress" style="width: ${course.progress}%"></div>
            </div>
            <span>${course.progress}% Complete</span>
        </div>
    `).join('');

    // Update members list
    const membersList = document.getElementById('membersList');
    membersList.innerHTML = domain.members.map(member => `
        <div class="member-item">
            <h4>${member.name}</h4>
            <span>${member.role}</span>
        </div>
    `).join('');

    // Update projects list
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = domain.projects.map(project => `
        <div class="project-item">
            <h4>${project.title}</h4>
            <span class="status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
        </div>
    `).join('');
}

function loadNews() {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = mockNews.map(news => `
        <div class="news-item">
            <span class="category">${news.category}</span>
            <h3>${news.title}</h3>
            <p class="description">${news.description}</p>
            <span class="date">${news.date}</span>
        </div>
    `).join('');
}

// Chat functionality
let currentChat = null;
let messageHistory = [];

// AI Response patterns
const aiResponses = {
    greeting: [
        "Hello! How can I help you today?",
        "Hi there! What would you like to learn about?",
        "Welcome! I'm here to help you with your learning journey."
    ],
    question: {
        courses: "We offer various courses in this domain. Would you like to know more about any specific course?",
        projects: "I can help you with project ideas and guidance. What type of project interests you?",
        learning: "I can help you create a learning path. What's your current skill level?",
        default: "That's an interesting question. Let me help you with that."
    },
    help: "I can help you with:\n- Course recommendations\n- Project guidance\n- Learning resources\n- Technical questions\nWhat would you like to know?",
    thanks: [
        "You're welcome! Let me know if you need anything else.",
        "Happy to help! Feel free to ask more questions.",
        "Anytime! Keep learning and growing!"
    ],
    default: [
        "I understand. Would you like to know more about our courses?",
        "That's interesting! I can help you explore this topic further.",
        "Let me help you with that. What specific aspect would you like to learn about?"
    ]
};

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
        return getRandomResponse(aiResponses.greeting);
    }
    
    // Check for thanks
    if (lowerMessage.match(/thank|thanks/)) {
        return getRandomResponse(aiResponses.thanks);
    }
    
    // Check for help request
    if (lowerMessage.match(/help|support|assist/)) {
        return aiResponses.help;
    }
    
    // Check for questions about courses
    if (lowerMessage.match(/course|class|learn|study/)) {
        return aiResponses.question.courses;
    }
    
    // Check for questions about projects
    if (lowerMessage.match(/project|build|create|develop/)) {
        return aiResponses.question.projects;
    }
    
    // Check for learning-related questions
    if (lowerMessage.match(/how to|learn|start|begin/)) {
        return aiResponses.question.learning;
    }
    
    // Default response
    return getRandomResponse(aiResponses.default);
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function initializeChat() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const contactSearch = document.getElementById('contactSearch');
    const contactsList = document.getElementById('contactsList');

    // Load contacts
    const contacts = mockUsers.filter(user => user.id !== currentUser.id);
    contactsList.innerHTML = contacts.map(contact => `
        <div class="contact-item" data-user-id="${contact.id}">
            <div class="avatar">${contact.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="contact-info">
                <h4>${contact.name}</h4>
                <p>Click to start chat</p>
            </div>
        </div>
    `).join('');

    // Contact click handler
    contactsList.addEventListener('click', (e) => {
        const contactItem = e.target.closest('.contact-item');
        if (contactItem) {
            const userId = parseInt(contactItem.dataset.userId);
            const contact = contacts.find(c => c.id === userId);
            if (contact) {
                currentChat = contact;
                updateChatHeader(contact);
                loadChatHistory(contact.id);
                
                // Add welcome message
                setTimeout(() => {
                    const welcomeMessage = {
                        id: Date.now(),
                        senderId: contact.id,
                        receiverId: currentUser.id,
                        content: getRandomResponse(aiResponses.greeting),
                        timestamp: new Date()
                    };
                    messageHistory.push(welcomeMessage);
                    addMessageToChat(welcomeMessage);
                }, 500);
            }
        }
    });

    // Search contacts
    contactSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredContacts = contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm)
        );
        contactsList.innerHTML = filteredContacts.map(contact => `
            <div class="contact-item" data-user-id="${contact.id}">
                <div class="avatar">${contact.name.split(' ').map(n => n[0]).join('')}</div>
                <div class="contact-info">
                    <h4>${contact.name}</h4>
                    <p>Click to start chat</p>
                </div>
            </div>
        `).join('');
    });

    // Message form submission
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message && currentChat) {
            // Add user message
            const userMessage = {
                id: Date.now(),
                senderId: currentUser.id,
                receiverId: currentChat.id,
                content: message,
                timestamp: new Date()
            };
            
            messageHistory.push(userMessage);
            addMessageToChat(userMessage);
            messageInput.value = '';
            
            // Simulate AI thinking
            setTimeout(() => {
                const aiMessage = {
                    id: Date.now() + 1,
                    senderId: currentChat.id,
                    receiverId: currentUser.id,
                    content: getAIResponse(message),
                    timestamp: new Date()
                };
                messageHistory.push(aiMessage);
                addMessageToChat(aiMessage);
            }, 1000);
        }
    });
}

function updateChatHeader(contact) {
    const chatHeader = document.querySelector('.chat-header');
    chatHeader.innerHTML = `
        <div class="avatar">${contact.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="chat-header-info">
            <h3>${contact.name}</h3>
            <p>Online</p>
        </div>
    `;
}

function loadChatHistory(contactId) {
    const chatMessages = document.getElementById('chatMessages');
    const history = messageHistory.filter(msg => 
        (msg.senderId === currentUser.id && msg.receiverId === contactId) ||
        (msg.senderId === contactId && msg.receiverId === currentUser.id)
    );
    
    chatMessages.innerHTML = history.map(msg => createMessageElement(msg)).join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessageToChat(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = createMessageElement(message);
    chatMessages.insertAdjacentHTML('beforeend', messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createMessageElement(message) {
    const isSent = message.senderId === currentUser.id;
    const sender = isSent ? currentUser : currentChat;
    const initials = sender.name.split(' ').map(n => n[0]).join('');
    
    return `
        <div class="message ${isSent ? 'sent' : 'received'}">
            <div class="avatar">${initials}</div>
            <div class="message-content">
                <p>${message.content}</p>
                <span class="time">${message.timestamp.toLocaleTimeString()}</span>
            </div>
        </div>
    `;
}

// Initialize chat when messages section is shown
document.getElementById('messagesSection').addEventListener('show', initializeChat); 