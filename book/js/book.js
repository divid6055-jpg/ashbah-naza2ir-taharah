// ============================================================
// كتاب الأشباه والنظائر - وظائف التحكم
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // ترقيم الصفحات تلقائياً
    const pages = document.querySelectorAll('.page:not(.cover-page):not(.no-number)');
    const totalPages = document.querySelectorAll('.page').length;
    
    pages.forEach((page, index) => {
        const pageNumElement = page.querySelector('.page-number');
        if (pageNumElement && !pageNumElement.dataset.manual) {
            const pageNum = index + 1;
            pageNumElement.textContent = convertToArabicNumerals(pageNum);
        }
    });
    
    // إجمالي الصفحات في رأس الكتاب
    const totalPagesElements = document.querySelectorAll('.total-pages');
    totalPagesElements.forEach(el => {
        el.textContent = convertToArabicNumerals(totalPages);
    });
});

// تحويل الأرقام إلى عربية
function convertToArabicNumerals(num) {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(d => arabicNumerals[d] || d).join('');
}

// طباعة الكتاب كـ PDF
function printBook() {
    window.print();
}

// تبديل عرض شريط الأدوات
function toggleToolbar() {
    const toolbar = document.querySelector('.toolbar');
    if (toolbar) {
        toolbar.style.display = toolbar.style.display === 'none' ? 'flex' : 'none';
    }
}

// الانتقال إلى صفحة معينة
function goToPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    if (pages[pageNum - 1]) {
        pages[pageNum - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// الانتقال إلى فصل معين
function goToChapter(chapterId) {
    const chapter = document.getElementById(chapterId);
    if (chapter) {
        chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
