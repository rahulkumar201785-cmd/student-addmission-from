// ===== STUDENT ADMISSION MANAGEMENT SYSTEM =====
// Data Storage
let students = JSON.parse(localStorage.getItem('students')) || [];
let currentPage = 1;
const itemsPerPage = 10;

// Demo Data
const demoStudents = [
    {
        id: 'ADM001',
        fullName: 'Rahul Sharma',
        fatherName: 'Rajesh Sharma',
        motherName: 'Sunita Sharma',
        dob: '2002-05-15',
        gender: 'Male',
        category: 'General',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543210',
        email: 'rahul.sharma@email.com',
        address: '123, Main Street, Delhi',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001',
        course: 'B.Tech',
        department: 'Computer Science',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '85%',
        previousSchool: 'Delhi Public School',
        board: 'CBSE',
        admissionFee: 5000,
        tuitionFee: 25000,
        otherCharges: 2000,
        totalFee: 32000,
        paymentMode: 'Online',
        amountPaid: 10000,
        photo: null,
        admissionDate: '2026-06-01',
        status: 'active'
    },
    {
        id: 'ADM002',
        fullName: 'Priya Patel',
        fatherName: 'Mahesh Patel',
        motherName: 'Anita Patel',
        dob: '2003-08-22',
        gender: 'Female',
        category: 'OBC',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543211',
        email: 'priya.patel@email.com',
        address: '456, Park Avenue, Mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        course: 'B.Sc',
        department: 'Science',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '88%',
        previousSchool: 'St. Xavier School',
        board: 'State Board',
        admissionFee: 5000,
        tuitionFee: 20000,
        otherCharges: 1500,
        totalFee: 26500,
        paymentMode: 'Cash',
        amountPaid: 15000,
        photo: null,
        admissionDate: '2026-06-02',
        status: 'active'
    },
    {
        id: 'ADM003',
        fullName: 'Amit Kumar',
        fatherName: 'Suresh Kumar',
        motherName: 'Rekha Kumar',
        dob: '2001-12-10',
        gender: 'Male',
        category: 'SC',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543212',
        email: 'amit.kumar@email.com',
        address: '789, Gandhi Road, Bangalore',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        course: 'B.Tech',
        department: 'Electronics',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '82%',
        previousSchool: 'Kendriya Vidyalaya',
        board: 'CBSE',
        admissionFee: 5000,
        tuitionFee: 25000,
        otherCharges: 2000,
        totalFee: 32000,
        paymentMode: 'Bank Transfer',
        amountPaid: 5000,
        photo: null,
        admissionDate: '2026-06-03',
        status: 'active'
    },
    {
        id: 'ADM004',
        fullName: 'Sneha Gupta',
        fatherName: 'Ramesh Gupta',
        motherName: 'Meena Gupta',
        dob: '2002-03-18',
        gender: 'Female',
        category: 'General',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543213',
        email: 'sneha.gupta@email.com',
        address: '321, College Road, Jaipur',
        city: 'Jaipur',
        state: 'Rajasthan',
        pincode: '302001',
        course: 'B.Com',
        department: 'Commerce',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '90%',
        previousSchool: 'Maharani College',
        board: 'State Board',
        admissionFee: 5000,
        tuitionFee: 18000,
        otherCharges: 1500,
        totalFee: 24500,
        paymentMode: 'Online',
        amountPaid: 12000,
        photo: null,
        admissionDate: '2026-06-04',
        status: 'active'
    },
    {
        id: 'ADM005',
        fullName: 'Vikram Singh',
        fatherName: 'Harpreet Singh',
        motherName: 'Kaur Singh',
        dob: '2001-09-25',
        gender: 'Male',
        category: 'General',
        nationality: 'Indian',
        religion: 'Sikh',
        mobile: '9876543214',
        email: 'vikram.singh@email.com',
        address: '654, Golden Temple Road, Amritsar',
        city: 'Amritsar',
        state: 'Punjab',
        pincode: '143001',
        course: 'MBA',
        department: 'Management',
        admissionYear: '2026',
        semester: '1',
        previousQualification: 'Graduation',
        previousPercentage: '7.5 CGPA',
        previousSchool: 'Guru Nanak Dev University',
        board: 'University',
        admissionFee: 8000,
        tuitionFee: 50000,
        otherCharges: 3000,
        totalFee: 61000,
        paymentMode: 'Cheque',
        amountPaid: 20000,
        photo: null,
        admissionDate: '2026-06-05',
        status: 'active'
    },
    {
        id: 'ADM006',
        fullName: 'Neha Verma',
        fatherName: 'Ajay Verma',
        motherName: 'Suman Verma',
        dob: '2003-01-30',
        gender: 'Female',
        category: 'EWS',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543215',
        email: 'neha.verma@email.com',
        address: '147, Gomti Nagar, Lucknow',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        pincode: '226010',
        course: 'B.A',
        department: 'Arts',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '78%',
        previousSchool: 'City Montessori School',
        board: 'CBSE',
        admissionFee: 5000,
        tuitionFee: 15000,
        otherCharges: 1000,
        totalFee: 21000,
        paymentMode: 'Cash',
        amountPaid: 10000,
        photo: null,
        admissionDate: '2026-06-06',
        status: 'active'
    },
    {
        id: 'ADM007',
        fullName: 'Arjun Reddy',
        fatherName: 'Venkatesh Reddy',
        motherName: 'Lakshmi Reddy',
        dob: '2002-07-14',
        gender: 'Male',
        category: 'OBC',
        nationality: 'Indian',
        religion: 'Hindu',
        mobile: '9876543216',
        email: 'arjun.reddy@email.com',
        address: '258, IT Park Road, Hyderabad',
        city: 'Hyderabad',
        state: 'Andhra Pradesh',
        pincode: '500081',
        course: 'BCA',
        department: 'Computer Science',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '86%',
        previousSchool: 'Narayana Junior College',
        board: 'State Board',
        admissionFee: 5000,
        tuitionFee: 22000,
        otherCharges: 1800,
        totalFee: 28800,
        paymentMode: 'Online',
        amountPaid: 15000,
        photo: null,
        admissionDate: '2026-06-07',
        status: 'active'
    },
    {
        id: 'ADM008',
        fullName: 'Fatima Khan',
        fatherName: 'Imran Khan',
        motherName: 'Ayesha Khan',
        dob: '2002-11-05',
        gender: 'Female',
        category: 'General',
        nationality: 'Indian',
        religion: 'Muslim',
        mobile: '9876543217',
        email: 'fatima.khan@email.com',
        address: '369, Park Street, Kolkata',
        city: 'Kolkata',
        state: 'West Bengal',
        pincode: '700016',
        course: 'BBA',
        department: 'Management',
        admissionYear: '2026',
        semester: '1',
        previousQualification: '12th',
        previousPercentage: '84%',
        previousSchool: 'La Martiniere School',
        board: 'ICSE',
        admissionFee: 5000,
        tuitionFee: 20000,
        otherCharges: 1500,
        totalFee: 26500,
        paymentMode: 'Bank Transfer',
        amountPaid: 8000,
        photo: null,
        admissionDate: '2026-06-08',
        status: 'active'
    }
];

// Initialize demo data if empty
if (students.length === 0) {
    students = [...demoStudents];
    saveStudents();
}

// ===== UTILITY FUNCTIONS =====
function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
    updateStats();
}

function generateRollNumber() {
    const prefix = 'ADM';
    const num = String(students.length + 1).padStart(3, '0');
    return prefix + num;
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const icon = toast.querySelector('i');

    toastMessage.textContent = message;

    if (type === 'success') {
        toast.style.background = 'var(--success)';
        icon.className = 'fas fa-check-circle';
    } else if (type === 'error') {
        toast.style.background = 'var(--danger)';
        icon.className = 'fas fa-exclamation-circle';
    } else if (type === 'warning') {
        toast.style.background = 'var(--warning)';
        icon.className = 'fas fa-exclamation-triangle';
    }

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function getFeeStatus(student) {
    const remaining = student.totalFee - student.amountPaid;
    if (remaining <= 0) return { status: 'paid', label: 'Paid', class: 'status-paid' };
    if (remaining > student.totalFee * 0.5) return { status: 'overdue', label: 'Overdue', class: 'status-overdue' };
    return { status: 'pending', label: 'Pending', class: 'status-pending' };
}

// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    // Calculate total fee
    const feeInputs = ['admissionFee', 'tuitionFee', 'otherCharges'];
    feeInputs.forEach(id => {
        const input = document.querySelector(`[name="${id}"]`);
        if (input) {
            input.addEventListener('input', calculateTotalFee);
        }
    });

    // Photo preview
    const photoInput = document.getElementById('photoInput');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('photoPreview');
                    preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Form submission
    const form = document.getElementById('admissionForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Search and filter
    const searchInput = document.getElementById('searchInput');
    const filterCourse = document.getElementById('filterCourse');
    const filterDepartment = document.getElementById('filterDepartment');
    const filterYear = document.getElementById('filterYear');

    if (searchInput) searchInput.addEventListener('input', debounce(renderStudents, 300));
    if (filterCourse) filterCourse.addEventListener('change', () => { currentPage = 1; renderStudents(); });
    if (filterDepartment) filterDepartment.addEventListener('change', () => { currentPage = 1; renderStudents(); });
    if (filterYear) filterYear.addEventListener('change', () => { currentPage = 1; renderStudents(); });

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                navLinks.classList.remove('active');
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Initial render
    updateStats();
    renderStudents();

    // Chart
    renderChart();
});

function calculateTotalFee() {
    const admissionFee = parseFloat(document.querySelector('[name="admissionFee"]').value) || 0;
    const tuitionFee = parseFloat(document.querySelector('[name="tuitionFee"]').value) || 0;
    const otherCharges = parseFloat(document.querySelector('[name="otherCharges"]').value) || 0;
    const total = admissionFee + tuitionFee + otherCharges;
    document.querySelector('[name="totalFee"]').value = total;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const student = {};

    formData.forEach((value, key) => {
        if (key !== 'declaration') {
            student[key] = value;
        }
    });

    // Generate ID and add metadata
    student.id = generateRollNumber();
    student.admissionDate = new Date().toISOString().split('T')[0];
    student.status = 'active';

    // Handle photo
    const photoInput = document.getElementById('photoInput');
    if (photoInput && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            student.photo = e.target.result;
            finishSubmission(student);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        student.photo = null;
        finishSubmission(student);
    }
}

function finishSubmission(student) {
    students.push(student);
    saveStudents();
    renderStudents();

    document.getElementById('admissionForm').reset();
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('photoPreview').style.display = 'none';
    document.querySelector('[name="totalFee"]').value = '';

    showToast(`Admission successful! Roll Number: ${student.id}`);

    // Scroll to students list
    document.getElementById('students').scrollIntoView({ behavior: 'smooth' });
}

// ===== STUDENTS TABLE =====
function getFilteredStudents() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const courseFilter = document.getElementById('filterCourse')?.value || '';
    const departmentFilter = document.getElementById('filterDepartment')?.value || '';
    const yearFilter = document.getElementById('filterYear')?.value || '';

    return students.filter(student => {
        const matchesSearch = !searchTerm || 
            student.fullName.toLowerCase().includes(searchTerm) ||
            student.id.toLowerCase().includes(searchTerm) ||
            student.course.toLowerCase().includes(searchTerm) ||
            student.mobile.includes(searchTerm);

        const matchesCourse = !courseFilter || student.course === courseFilter;
        const matchesDepartment = !departmentFilter || student.department === departmentFilter;
        const matchesYear = !yearFilter || student.admissionYear === yearFilter;

        return matchesSearch && matchesCourse && matchesDepartment && matchesYear;
    });
}

function renderStudents() {
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;

    const filtered = getFilteredStudents();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageStudents = filtered.slice(start, end);

    tbody.innerHTML = pageStudents.map(student => {
        const feeStatus = getFeeStatus(student);
        const photoHtml = student.photo 
            ? `<img src="${student.photo}" class="student-photo" alt="${student.fullName}">`
            : `<div class="student-photo-placeholder">${getInitials(student.fullName)}</div>`;

        return `
            <tr>
                <td><strong>${student.id}</strong></td>
                <td>${photoHtml}</td>
                <td>${student.fullName}</td>
                <td>${student.course}</td>
                <td>${student.department}</td>
                <td>${student.admissionYear}</td>
                <td>${student.mobile}</td>
                <td><span class="status-badge ${feeStatus.class}">${feeStatus.label}</span></td>
                <td>
                    <div class="action-btns">
                        <button class="btn-icon btn-view-action" onclick="viewStudent('${student.id}')" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit-action" onclick="editStudent('${student.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-delete-action" onclick="deleteStudent('${student.id}')" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    renderPagination(totalPages, filtered.length);
}

function renderPagination(totalPages, totalItems) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="padding: 0.5rem;">...</span>`;
        }
    }

    html += `
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;

    html += `<span style="margin-left: 1rem; color: var(--secondary); font-size: 0.85rem;">Total: ${totalItems} students</span>`;

    pagination.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderStudents();
    document.getElementById('students').scrollIntoView({ behavior: 'smooth' });
}

// ===== STUDENT ACTIONS =====
function viewStudent(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    const feeStatus = getFeeStatus(student);
    const remaining = student.totalFee - student.amountPaid;

    const photoHtml = student.photo 
        ? `<img src="${student.photo}" class="detail-photo" alt="${student.fullName}">`
        : `<div class="detail-photo-placeholder">${getInitials(student.fullName)}</div>`;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="student-detail">
            <div class="detail-header">
                ${photoHtml}
                <div class="detail-title">
                    <h4>${student.fullName}</h4>
                    <p>Roll No: ${student.id} | ${student.course} | ${student.department}</p>
                </div>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-id-card"></i> Personal Information</h5>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Father's Name</label>
                        <span>${student.fatherName}</span>
                    </div>
                    <div class="detail-item">
                        <label>Mother's Name</label>
                        <span>${student.motherName}</span>
                    </div>
                    <div class="detail-item">
                        <label>Date of Birth</label>
                        <span>${student.dob}</span>
                    </div>
                    <div class="detail-item">
                        <label>Gender</label>
                        <span>${student.gender}</span>
                    </div>
                    <div class="detail-item">
                        <label>Category</label>
                        <span>${student.category}</span>
                    </div>
                    <div class="detail-item">
                        <label>Nationality</label>
                        <span>${student.nationality}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-phone-alt"></i> Contact Information</h5>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Mobile</label>
                        <span>${student.mobile}</span>
                    </div>
                    <div class="detail-item">
                        <label>Email</label>
                        <span>${student.email || 'N/A'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Address</label>
                        <span>${student.address}</span>
                    </div>
                    <div class="detail-item">
                        <label>City/State</label>
                        <span>${student.city}, ${student.state}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-book"></i> Academic Information</h5>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Course</label>
                        <span>${student.course}</span>
                    </div>
                    <div class="detail-item">
                        <label>Department</label>
                        <span>${student.department}</span>
                    </div>
                    <div class="detail-item">
                        <label>Admission Year</label>
                        <span>${student.admissionYear}</span>
                    </div>
                    <div class="detail-item">
                        <label>Semester</label>
                        <span>${student.semester}</span>
                    </div>
                    <div class="detail-item">
                        <label>Previous Qualification</label>
                        <span>${student.previousQualification}</span>
                    </div>
                    <div class="detail-item">
                        <label>Previous Percentage</label>
                        <span>${student.previousPercentage}</span>
                    </div>
                    <div class="detail-item">
                        <label>Previous School</label>
                        <span>${student.previousSchool || 'N/A'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Board</label>
                        <span>${student.board || 'N/A'}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-rupee-sign"></i> Fee Information</h5>
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Total Fee</label>
                        <span>₹${student.totalFee.toLocaleString()}</span>
                    </div>
                    <div class="detail-item">
                        <label>Amount Paid</label>
                        <span>₹${student.amountPaid.toLocaleString()}</span>
                    </div>
                    <div class="detail-item">
                        <label>Remaining</label>
                        <span style="color: ${remaining > 0 ? 'var(--danger)' : 'var(--success)'};">₹${remaining.toLocaleString()}</span>
                    </div>
                    <div class="detail-item">
                        <label>Payment Mode</label>
                        <span>${student.paymentMode}</span>
                    </div>
                    <div class="detail-item">
                        <label>Fee Status</label>
                        <span><span class="status-badge ${feeStatus.class}">${feeStatus.label}</span></span>
                    </div>
                    <div class="detail-item">
                        <label>Admission Date</label>
                        <span>${student.admissionDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('studentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function editStudent(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    // Fill form with student data
    const form = document.getElementById('admissionForm');
    Object.keys(student).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input && key !== 'id' && key !== 'admissionDate' && key !== 'status' && key !== 'photo') {
            input.value = student[key];
        }
    });

    // Delete old student and scroll to form
    deleteStudent(id, false);
    document.getElementById('admission').scrollIntoView({ behavior: 'smooth' });
    showToast('Student data loaded in form. Update and submit.', 'warning');
}

function deleteStudent(id, confirm = true) {
    if (confirm && !window.confirm('Are you sure you want to delete this student?')) return;

    students = students.filter(s => s.id !== id);
    saveStudents();
    renderStudents();

    if (confirm) {
        showToast('Student deleted successfully!');
    }
}

function closeModal() {
    document.getElementById('studentModal').classList.remove('active');
    document.body.style.overflow = '';
}

function printStudent() {
    window.print();
}

// ===== STATS =====
function updateStats() {
    const totalEl = document.getElementById('totalStudents');
    const activeEl = document.getElementById('activeStudents');
    const todayEl = document.getElementById('todayAdmissions');

    if (totalEl) totalEl.textContent = students.length;
    if (activeEl) activeEl.textContent = students.filter(s => s.status === 'active').length;

    const today = new Date().toISOString().split('T')[0];
    if (todayEl) todayEl.textContent = students.filter(s => s.admissionDate === today).length;
}

// ===== REPORTS =====
function showCourseReport() {
    const courseData = {};
    students.forEach(s => {
        courseData[s.course] = (courseData[s.course] || 0) + 1;
    });

    const labels = Object.keys(courseData);
    const data = Object.values(courseData);
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6'];

    renderChart('bar', labels, data, colors, 'Course-wise Admissions');
    showToast('Course-wise report loaded!');
}

function showDepartmentReport() {
    const deptData = {};
    students.forEach(s => {
        deptData[s.department] = (deptData[s.department] || 0) + 1;
    });

    const labels = Object.keys(deptData);
    const data = Object.values(deptData);
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6'];

    renderChart('doughnut', labels, data, colors, 'Department-wise Admissions');
    showToast('Department-wise report loaded!');
}

function showMonthlyReport() {
    const monthData = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    students.forEach(s => {
        const month = new Date(s.admissionDate).getMonth();
        monthData[months[month]] = (monthData[months[month]] || 0) + 1;
    });

    const labels = Object.keys(monthData);
    const data = Object.values(monthData);
    const colors = ['#2563eb'];

    renderChart('line', labels, data, colors, 'Monthly Admissions');
    showToast('Monthly report loaded!');
}

function showFeeReport() {
    const feeData = {
        'Total Collected': students.reduce((sum, s) => sum + parseFloat(s.amountPaid), 0),
        'Total Pending': students.reduce((sum, s) => sum + (s.totalFee - s.amountPaid), 0)
    };

    const labels = Object.keys(feeData);
    const data = Object.values(feeData);
    const colors = ['#10b981', '#ef4444'];

    renderChart('pie', labels, data, colors, 'Fee Collection Report');
    showToast('Fee collection report loaded!');
}

function renderChart(type = 'bar', labels = [], data = [], colors = [], title = 'Admission Statistics') {
    const canvas = document.getElementById('admissionChart');
    if (!canvas) return;

    // Simple canvas chart rendering (no external library needed)
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    canvas.width = container.clientWidth - 40;
    canvas.height = 350;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // If no data, show default
    if (labels.length === 0) {
        const courseData = {};
        students.forEach(s => {
            courseData[s.course] = (courseData[s.course] || 0) + 1;
        });
        labels = Object.keys(courseData);
        data = Object.values(courseData);
        colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6'];
    }

    const padding = 60;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const maxValue = Math.max(...data) * 1.2;
    const barWidth = chartWidth / labels.length * 0.6;
    const gap = chartWidth / labels.length * 0.4;

    // Title
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 16px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText(title, canvas.width / 2, 30);

    // Draw axes
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw bars
    labels.forEach((label, i) => {
        const x = padding + (i * (barWidth + gap)) + gap / 2;
        const barHeight = (data[i] / maxValue) * chartHeight;
        const y = canvas.height - padding - barHeight;

        // Bar
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(x, y, barWidth, barHeight);

        // Value on top
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 12px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(data[i], x + barWidth / 2, y - 8);

        // Label
        ctx.fillStyle = '#64748b';
        ctx.font = '11px Poppins';
        ctx.fillText(label, x + barWidth / 2, canvas.height - padding + 20);
    });

    // Y-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Poppins';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = Math.round((maxValue / 5) * i);
        const y = canvas.height - padding - (chartHeight / 5) * i;
        ctx.fillText(value, padding - 10, y + 4);
    }
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('studentModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
