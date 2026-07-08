// ========== HAMBURGER MENU ==========
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    const allNavLinks = document.querySelectorAll('.nav-link');

    function closeMenu() {
        if (menuToggle) menuToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (menuToggle) menuToggle.classList.add('active');
        if (navMenu) navMenu.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navMenu && navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    if (allNavLinks.length > 0) {
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 576) {
                    closeMenu();
                }
            });
        });
    }

    // ========== DATA FOTO ==========
    const photosData = [
        { src: "img/img1/1.jpeg", title: "Reuni pertama di rumah Qory", desc: "Beberapa pekan setelah kita lulus atau resmi bukan lagi santri SMPIT DQM, kita memutuskan untuk mengadakan Reuni pertama kita di rumah Qory pada tanggal 16-17 Juni 2025 ❤️" },
        { src: "img/img1/2.jpeg", title: "Maen di Timezone 😂", desc: "Kita ke Mall Plaza Pondok Gede buat maen di Timezone wkwkwk, gapapa lah yaa..." },
        { src: "img/img1/3.jpeg", title: "Makan bersama", desc: "Sebelum pulang kita makan dulu di Solaria!" },
        { src: "img/img1/4.jpeg", title: "Shopping bareng!", desc: "Kita juga sempet mampir belanja dulu, buat beli ciki sama mie. Buat makan bareng pas malemnya hihi.." },
        { src: "img/img1/5.jpeg", title: "Menuju Mall Plaza", desc: "Kalo ini pas kita OTW ke Mall Plaza Pondok Gede, awal-awal jadinya pesen Grab😂 (walaupun pulangnya jalan kaki siii)" },
        { src: "img/img1/6.jpeg", title: "OTW rumah Qory", desc: "Kalo ini berdua lagi mau OTW ke tempat Reunian pertama nih hihi" },
       
        { src: "img/img2/1.jpeg", title: "Reuni kedua di Rumah Qory", desc: "Setelah 1 semester kita bersekolah di sekolah masing-masing, akhirnya libur pun tiba. Setelah 1 semester tidak bertemu, kami pun merencanakan acara Reuni kedua yang Alhamdulillah berhasil dilaksanakan di Rumah Qory pada tanggal 23-24 Desember 2025" },
        { src: "img/img2/6.jpeg", title: "OTW ke Stasiun", desc: "Setelah semua sudah hadir & lengkap, kami bersiap-siap untuk pergi ke Mall. Ba'da Dzhuhur kami pun berangkat.." },
        { src: "img/img2/5.jpeg", title: "Di kereta", desc: "Lagi nunggu di dalem keretaaa" },
        { src: "img/img2/7.jpeg", title: "Di Stasiun LRT", desc: "Sambil nunggu keretanya dateng boleh kalii selfie duluuu hihi 🤭" },
        { src: "img/img2/2.jpeg", title: "Watch Movie Together!", desc: "Nonton Agak Laen 2 di XXI Revo Mall bareng-bareng. wkkwk seru banget woi! 😆 " }, 
        { src: "img/img2/3.jpeg", title: "Selfie", desc: "Selfie Qory dan Hadid. Hafizh lagi ngecas dulu wkwk 😙" },
        { src: "img/img2/4.jpeg", title: "Makan Bareng", desc: "Abis nonton kita laper, dan akhirnya makan di CFC. enak lah yaa 😋" },
        { src: "img/img2/9.jpeg", title: "Foto bareng di toilet", desc: "Gatau juga ini kok bisa foto bareng di toilet umum yaa wkwk 🤣 Ceritanya ke toilet dulu sebelum pesen grab balik ke rumah dari stasiun" },
        { src: "img/img2/10.jpeg", title: "Tahajud Momen", desc: "Baru bangun.. masih ngantuk.. langsung tahajud.. eh, tapi ada yang aneh di gambarnyaa.. apa ya?" },
        { src: "img/img2/8.jpeg", title: "a Picture before go home", desc: "Seperti biasa sebelum pulang ke rumah masing-masing atau perpisahan, kita fotbar dulu nich" },
        { src: "img/img2/11.jpeg", title: "Kenangan✨", desc: "Foto yang ga sengaja diambil tapi ko hasilnya bagus banget yak? keren nih fotografer kite yee.." },
        
        { src: "img/img3/1.jpeg", title: "Lagi di bis", desc: "Bersama Hafizh, menuju ke tempatreunian ke-3" },
        { src: "img/img3/2.jpeg", title: "Selfie TEROOSS", desc: "Lagi di lift menuju ke lantai tertinggi. Wooaaa" },
        { src: "img/img3/3.jpeg", title: "Nyasar? Hadid NGAMUK?!", desc: "Eh.. LAH?! Kok nyasar ke Perpustakaan gede?! 😂" },
        { src: "img/img3/4.jpeg", title: "Reuni ke-3", desc: "Kali ini reuni ke-3 diadakan di Rumah Hadid.. yeyy. Sekarang bukan cuman reuni ni, tapi juga Bukber! + I'tikaf bareng.. seru uuy" },
        { src: "img/img3/5.jpeg", title: "Mati Lampu 🤫", desc: "Mumpung mati lampu, foto dulu gasiii? eh tapi kok bagus ya hasilnya 😭 Hadid malah ga kliatan lagi mukanya 🥲" },
        { src: "img/img3/6.jpeg", title: "Kedatangan Tamu", desc: "Ga nyangka bisa ketemu sama Dayat guys! Makin rame nii 😆" },
        { src: "img/img3/7.jpeg", title: "Fotbar pake Ipad", desc: "Bagus ya hasilnyaa...." },
        { src: "img/img3/8.jpeg", title: "Sahabat Selamanya", desc: "Senyum tulus yang selalu menguatkan di segala keadaan." },
        
        { src: "img/img4/1.jpeg", title: "Reuni ke? Empat!", desc: "Maksai banget sih yang kali ini.. di rumah Qory lagi wkwk. apis dah masuk sekolah, jadinya hadid ke rumah Qory duluan. Terus kita ber-3 ketemuan di AEON Tanjung Barat. Seruu!" },
        { src: "img/img4/2.jpeg", title: "Tunggu Kami Sukses Nanti", desc: "Seperti biasa.. tujuan ke mall cuman buat nonton wkwk. Semoga judulnya jadi kenyataan buat kita ber-3.. Aamiin..." },
        { src: "img/img4/3.jpeg", title: "Nunggu mulai", desc: "Sambil nunggu studionya siap fotbar dulu gasiii. abadikan momen :) *fun fact ketemu musa Deqi" },
        { src: "img/img4/4.jpeg", title: "Setelah nonton", desc: "Ini keadaan kami setelah nonton. Jujur kita bertiga pada berlinang air mata saking sedihnya film ini TwT - Relate banget buat anak pertama kayak hafizh dan hadid.. Tapi jujur emang sesedih itu woii film nyaa :>" },
        { src: "img/img4/5.jpeg", title: "Bubar..?", desc: "Cepet banget yaa. ga kerasa tiba-tiba udah mau pada pulang ajaa :< Tadi malem kita mukbang mie + ayam, wuushh enak kali woe! abis tu mabar ML, seruuuuu!! Dan mulai tertidur satu persatu.." },
        
        { src: "img/img5/1.jpeg", title: "Terminal Pinang Ranti", desc: "ALhamdulillah reuni ke-5 terlaksana! (di rumah Qory lagi) Jujur di reuni kali ini kita gatau mau kemana wkwk, menmgandalkan kaki entah kemana.. ini kami lagi di Terminal Pinang Ranti menuju ke Jakarta" },
        { src: "img/img5/2.jpeg", title: "On The Way", desc: "Lagi di jalan guys. Tebak kemana nii hayo" },
        { src: "img/img5/3.jpeg", title: "Monas!", desc: "Kita turun di terminal kota baru, lanjut masuk ke Monas. Panas uy! (Tujuan kita di seberang)" },
        { src: "img/img5/4.jpeg", title: "Istiqlal", desc: "Alhamdulillah sampai di Masjid Istiqlal, setelah jalan panas-panasan. Sampai kita langsung shalat Dzuhur. dan Fun-Fact-nya kita gatau mau kemana lagi abis ini woe!" },
        { src: "img/img5/5.jpeg", title: "Kota Tua!", desc: "Alhasil kita memutuskan buat ke Kota Tua! kita naik KRL ke Jakarta Kota, Sampai sana kita cari Museum dan dapetnya Museum Bank Indonesia (MUBI). Masuknya Rp. 5000 (sebenernya gratis kalo pake kartu pelajar tapi gaada yang bawa wkwk)" },
        { src: "img/img5/6.jpeg", title: "Menyusuri Museum", desc: "Keren sih Museumnya jujur." },
        { src: "img/img5/7.jpeg", title: "Iconic Kota Tua", desc: "Abis dari museum, sekalian kita ke alun-alunnya kota tua yang Iconic banget! Foto2 + jalan2 bentar abis tu balik ke rumah, nyampe Maghrib" },
        { src: "img/img5/8.jpeg", title: "Memory in a Keychain", desc: "Kenang-kenangan :>" },
        { src: "img/img5/9.jpeg", title: "Memory in a Frame", desc: "Kenang-kenangan :>" },
        
        { src: "https://macantua.wordpress.com/wp-content/uploads/2013/07/tanda-tanya.jpg", title: "Coming Soon", desc: "Terus semangat kawanku!" },
        
    ];

    // ========== PAGINATION ==========
    let currentPage = 1;
    const itemsPerPage = 12;

    function getVisiblePages(currentPage, totalPages) {
        const visiblePages = [];
        const maxVisible = 3;

        if (totalPages <= maxVisible + 2) {
            for (let i = 1; i <= totalPages; i++) {
                visiblePages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= maxVisible; i++) {
                    visiblePages.push(i);
                }
                visiblePages.push('...');
                visiblePages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                visiblePages.push(1);
                visiblePages.push('...');
                for (let i = totalPages - (maxVisible - 1); i <= totalPages; i++) {
                    visiblePages.push(i);
                }
            } else {
                visiblePages.push(1);
                visiblePages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    visiblePages.push(i);
                }
                visiblePages.push('...');
                visiblePages.push(totalPages);
            }
        }
        return visiblePages;
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.getElementById('pagination-container');
        const pageInfo = document.getElementById('page-info');

        if (!paginationContainer) return;

        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            if (pageInfo) pageInfo.style.display = 'none';
            return;
        }

        paginationContainer.style.display = 'flex';
        if (pageInfo) {
            pageInfo.style.display = 'block';
            const startItem = (currentPage - 1) * itemsPerPage + 1;
            const endItem = Math.min(currentPage * itemsPerPage, totalItems);
            pageInfo.innerHTML = `Menampilkan ${startItem} - ${endItem} dari ${totalItems} foto`;
        }

        paginationContainer.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '←';
        prevBtn.classList.add('pagination-btn');
        if (currentPage === 1) prevBtn.disabled = true;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGallery();
                renderPagination(photosData.length);
                document.getElementById('gallery-page').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        paginationContainer.appendChild(prevBtn);

        const visiblePages = getVisiblePages(currentPage, totalPages);
        visiblePages.forEach(page => {
            if (page === '...') {
                const ellipsis = document.createElement('span');
                ellipsis.innerHTML = '...';
                ellipsis.classList.add('pagination-ellipsis');
                paginationContainer.appendChild(ellipsis);
            } else {
                const pageBtn = document.createElement('button');
                pageBtn.innerHTML = page;
                pageBtn.classList.add('pagination-btn');
                if (page === currentPage) pageBtn.classList.add('active');
                pageBtn.addEventListener('click', () => {
                    currentPage = page;
                    renderGallery();
                    renderPagination(photosData.length);
                    document.getElementById('gallery-page').scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
                paginationContainer.appendChild(pageBtn);
            }
        });

        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '→';
        nextBtn.classList.add('pagination-btn');
        if (currentPage === totalPages) nextBtn.disabled = true;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderGallery();
                renderPagination(photosData.length);
                document.getElementById('gallery-page').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // ========== MODAL ==========
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');

    function openModal(imgSrc, captionText) {
        if (modal) {
            modal.style.display = 'flex';
            modalImg.src = imgSrc;
            modalCaption.innerText = captionText;
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal')) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // ========== RENDER GALLERY ==========
    function renderGallery() {
        const galleryContainer = document.getElementById('gallery-container');
        if (!galleryContainer) return;
        galleryContainer.innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPhotos = photosData.slice(startIndex, endIndex);

        currentPhotos.forEach((photo) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img class="card-img" src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="card-content">
                    <h3><svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg> ${photo.title}</h3>
                    <p>${photo.desc.substring(0, 65)}${photo.desc.length > 65 ? '...' : ''}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                openModal(photo.src, `${photo.title} — ${photo.desc}`);
            });
            galleryContainer.appendChild(card);
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();

        if (currentPhotos.length === 0) {
            galleryContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Belum ada foto untuk ditampilkan.</p>';
        }
    }

    // ========== ROUTING ==========
    const pages = {
        welcome: document.getElementById('welcome-page'),
        gallery: document.getElementById('gallery-page'),
        story: document.getElementById('story-page'),
        about: document.getElementById('about-page'),
        games: document.getElementById('games-page'),
        'tebak-kenangan': document.getElementById('tebak-kenangan-page'),
        'escape-pesantren': document.getElementById('escape-pesantren-page')
    };

    const navLinkItems = document.querySelectorAll('.nav-link');

    function showPage(pageId) {
        Object.values(pages).forEach(page => {
            if (page) page.classList.remove('active-page');
        });
        if (pages[pageId]) {
            pages[pageId].classList.add('active-page');
        }
        navLinkItems.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId && pages[pageId]) {
                showPage(pageId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    const exploreBtn = document.getElementById('exploreGalleryBtn');
    const readStoryBtn = document.getElementById('readStoryBtn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            showPage('gallery');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    if (readStoryBtn) {
        readStoryBtn.addEventListener('click', () => {
            showPage('story');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========== INITIAL PAGE ==========
    showPage('welcome');

    // ========== INITIALISASI GALLERY ==========
    renderGallery();
    renderPagination(photosData.length);

    // Fallback untuk gambar error
    document.addEventListener('DOMContentLoaded', () => {
        const imgs = document.querySelectorAll('.card-img');
        imgs.forEach(img => {
            img.addEventListener('error', () => {
                img.src = 'https://picsum.photos/id/100/500/400';
            });
        });
    });

    // ========== GAME: TEBAK KENANGAN ==========
    const quizQuestions = [
        {
            question: "Di mana tempat pertama kali kita mulai saling mengenal?",
            options: ["Sekolah SMA", "Pesantren di Bogor", "Tempat Les", "Di Stasiun"],
            answer: 1
        },
        {
            question: "Permainan apa yang sering kita mainkan sambil menunggu waktu azan?",
            options: ["Monopoli & Ular Tangga", "Mobile Legends & FF", "Suit Taro, ABC Lima Dasar, TOD", "Catur & Remi"],
            answer: 2
        },
        {
            question: "Di rumah siapa Reuni Ketiga kita diadakan?",
            options: ["Rumah Hadid", "Rumah Hafizh", "Rumah Dayat", "Rumah Qory"],
            answer: 0
        },
        {
            question: "Di Reuni ke berapa kita nonton Agak Laen 2 di Bioskop?",
            options: ["Pertama", "Keempat", "Ketiga", "Kedua"],
            answer: 3
        },
        {
            question: "Kalo jumlah semua Adek Hadid, Adek Hafizh, dan Kakak Qory di Jumlahin berapa totalnya?",
            options: ["kayaknya 10", "Mungkin 7", "8 Gak sih", "6 Woy"],
            answer: 2
        },
        {
            question: "Siapa tamu kejutan atau teman lama yang ketemu pas kita Reuni Ketiga?",
            options: ["Musa", "Dayat", "Fadhil", "Ustadz"],
            answer: 1
        },
        {
            question: "Pas Reuni Keempat kita janjian ketemuan di mana?",
            options: ["Revo Mall", "Stasiun LRT", "AEON Tanjung Barat", "Plaza Pondok Gede"],
            answer: 2
        },
        {
            question: "Siapa di antara kita yang paling pendiam?",
            options: ["Hadid", "Qory", "Hafizh", "Dayat"],
            answer: 1
        },
        {
            question: "Nama Asrama kita pas kelas 7?",
            options: ["Al - Fajr 5", "Al - Fajr 6", "An Najm 7", "An Nashr 4"],
            answer: 0
        },
        {
            question: "Apa nama dari Circle kita?",
            options: ["TriEs", "3S", "Tries", "Threesss"],
            answer: 2
        }
    ];

    let currentQuestionIndex = 0;
    let quizScore = 0;
    let shuffledQuizQuestions = [];
    
    const quizActiveArea = document.getElementById('quiz-active-area');
    const quizResultArea = document.getElementById('quiz-result-area');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const quizProgressText = document.getElementById('quiz-progress-text');
    const quizProgressBar = document.getElementById('quiz-progress-bar');

    // Helper untuk mengacak array
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function startTebakKenangan() {
        showPage('tebak-kenangan');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        currentQuestionIndex = 0;
        quizScore = 0;
        
        // Siapkan soal dan opsi yang diacak
        shuffledQuizQuestions = quizQuestions.map(q => {
            const correctOption = q.options[q.answer]; // Simpan teks jawaban benar
            const shuffledOptions = shuffleArray([...q.options]); // Acak pilihan jawaban
            const newAnswerIndex = shuffledOptions.indexOf(correctOption); // Cari index jawaban benar yang baru
            return {
                ...q,
                options: shuffledOptions,
                answer: newAnswerIndex
            };
        });
        
        // Acak urutan pertanyaannya
        shuffleArray(shuffledQuizQuestions);

        quizResultArea.style.display = 'none';
        quizActiveArea.style.display = 'block';
        quizActiveArea.classList.remove('quiz-slide-exit', 'quiz-slide-enter');
        renderQuestion();
    }

    function renderQuestion() {
        quizActiveArea.classList.remove('quiz-slide-enter');
        void quizActiveArea.offsetWidth; // trigger reflow
        quizActiveArea.classList.add('quiz-slide-enter');

        const currentQ = shuffledQuizQuestions[currentQuestionIndex];
        
        quizProgressText.innerText = `Soal ${currentQuestionIndex + 1} dari ${shuffledQuizQuestions.length}`;
        const progressPercent = ((currentQuestionIndex) / shuffledQuizQuestions.length) * 100;
        quizProgressBar.style.width = `${progressPercent}%`;
        
        quizQuestionEl.innerText = currentQ.question;
        
        quizOptionsEl.innerHTML = '';
        currentQ.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => handleAnswer(idx);
            quizOptionsEl.appendChild(btn);
        });
    }

    function handleAnswer(selectedIndex) {
        const currentQ = shuffledQuizQuestions[currentQuestionIndex];
        if (selectedIndex === currentQ.answer) {
            quizScore++;
        }
        
        quizActiveArea.classList.remove('quiz-slide-enter');
        quizActiveArea.classList.add('quiz-slide-exit');
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuizQuestions.length) {
                quizActiveArea.classList.remove('quiz-slide-exit');
                renderQuestion();
            } else {
                quizActiveArea.style.display = 'none';
                showQuizResult();
            }
        }, 350);
    }

    function showQuizResult() {
        quizProgressBar.style.width = '100%';
        quizResultArea.style.display = 'block';
        
        document.getElementById('result-score').innerText = `${quizScore}/${shuffledQuizQuestions.length}`;
        
        let emoji = "";
        let message = "";
        
        if (quizScore >= 0 && quizScore <= 3) {
            emoji = "🤨";
            message = "Kamu Fake Friend ya?";
        } else if (quizScore >= 4 && quizScore <= 5) {
            emoji = "😂";
            message = "Kurang peka nih kamunya!";
        } else if (quizScore >= 6 && quizScore <= 8) {
            emoji = "😊";
            message = "Aww, bolehlah yaa. Hampir kukira Fake Friend loh.";
        } else if (quizScore === 9) {
            emoji = "😎";
            message = "Wah, dikit lagi nich! Kamu beneran perhatian ternyata.";
        } else if (quizScore === 10) {
            emoji = "❤️";
            message = "Yess! Aku tahu kamu adalah sahabat terbaik.";
        }
        
        document.getElementById('result-emoji').innerText = emoji;
        document.getElementById('result-message').innerText = message;
    }

    // ========== GAME: ESCAPE FROM PESANTREN ==========
    
    // Konfigurasi Ending
    // Konfigurasi Ending
    const epEndings = {
        'end_tidur': {
            id: 'end_tidur',
            title: 'Tidur adalah Jalan Ninja',
            stars: '⭐',
            icon: '💤',
            desc: 'Kamu memilih tidur dan melewatkan semua kejadian malam ini. Besoknya kamu cuma bisa denger cerita seru dari {friend1} dan {friend2} sambil gigit jari.'
        },
        'end_ketahuan': {
            id: 'end_ketahuan',
            title: 'Ketahuan Ustadz',
            stars: '⭐⭐',
            icon: '😂',
            desc: 'Apes! Kalian tertangkap basah oleh Ustadz Piket. Besok bertiga disuruh bersih-bersih halaman asrama seharian.'
        },
        'end_terkunci': {
            id: 'end_terkunci',
            title: 'Gerbang Terkunci',
            stars: '⭐⭐',
            icon: '🚪',
            desc: 'Gerbang utama digembok dan kalian menyerah. Gagal makan mie, tapi setidaknya aman kembali ke kamar.'
        },
        'end_failed': {
            id: 'end_failed',
            title: 'Brotherhood Failed',
            stars: '⭐',
            icon: '💔',
            desc: 'Kamu meninggalkan teman demi menyelamatkan diri sendiri. Benar-benar bukan tindakan seorang sahabat sejati!'
        },
        'end_salah_kamar': {
            id: 'end_salah_kamar',
            title: 'Salah Kamar',
            stars: '⭐⭐⭐',
            icon: '🤣',
            desc: 'Niatnya nyari tempat sembunyi, malah masuk ke kamar anak kelas 9 yang lagi rapat. Semua mata tertuju pada kalian!'
        },
        'end_success': {
            id: 'end_success',
            title: 'Mission Success',
            stars: '⭐⭐⭐⭐',
            icon: '🍜',
            desc: 'Berhasil membeli mie Indomie rebus dan makan dengan khidmat. Misi selesai dengan cukup memuaskan!'
        },
        'end_partner': {
            id: 'end_partner',
            title: 'Partner in Crime',
            stars: '⭐⭐⭐⭐',
            icon: '👑',
            desc: 'Kalian sangat kompak malam ini! Mulai dari bantu manjat sampai bayarin mie. Sahabat emang tiada duanya.'
        },
        'end_never_dies': {
            id: 'end_never_dies',
            title: 'Brotherhood Never Dies',
            stars: '⭐⭐⭐⭐⭐',
            icon: '🏆',
            desc: 'Malam yang epik! Kalian berhasil keluar, makan, dan kembali ke kamar tanpa ketahuan dengan kekompakan 100%. Persahabatan kalian abadi!'
        }
    };

    // Struktur Cerita
    const epNodes = {
        'start': {
            title: 'Kamar Asrama - 22:30',
            text: 'Jam menunjukkan pukul 22.30. Kamu ({player}) sedang berbaring santai. Tiba-tiba {friend1} menghampirimu dan berbisik pelan, "Bro... keluar bentar yuk."',
            options: [
                { text: 'Langsung ikut tanpa ba-bi-bu', targetId: 'scene_depan_kamar', fpChange: 10 },
                { text: 'Tanya dulu mau ke mana malam-malam gini', targetId: 'scene_tanya_dulu', fpChange: 5 },
                { text: 'Ah males ah, lanjut tidur aja', targetId: 'end_tidur', fpChange: -5 }
            ]
        },
        'scene_tanya_dulu': {
            title: 'Kamar Asrama - 22:32',
            text: '{friend1} nyengir. "Rahasia, pokoknya ikut aja. Seru nih mumpung asrama lagi sepi." Kamu masih sedikit ragu.',
            options: [
                { text: 'Yaudah deh, ayo gas!', targetId: 'scene_depan_kamar', fpChange: 10 },
                { text: 'Dingin bro, mending tidur nyenyak', targetId: 'end_tidur', fpChange: -5 }
            ]
        },
        'scene_depan_kamar': {
            title: 'Lorong Asrama - 22:35',
            text: 'Kamu dan {friend1} mengendap-endap keluar. Di lorong ternyata {friend2} sudah nunggu sambil jongkok. "Ayo buruan beli mie sebelum gerbang beneran dikunci rapet!" kata {friend2} tak sabar.',
            options: [
                { text: 'Setuju dan lanjut jalan ngendap-ngendap', targetId: 'scene_lorong_utama', fpChange: 10 },
                { text: 'Waduh gerbang? Nggak berani ah, ketahuan bisa disuruh bersihin wc', targetId: 'scene_tolak_takut', fpChange: -10 },
                { text: 'Eh jangan keluar dong, makan sisa Taro aja di kamarku', targetId: 'scene_makan_taro', fpChange: 5 }
            ]
        },
        'scene_tolak_takut': {
            title: 'Lorong Asrama - 22:38',
            text: '{friend1} dan {friend2} terlihat kecewa. "Yaelah bro, sekali-sekali. Masa cemen sih," ledek {friend2}. Kamu merasa agak bersalah.',
            options: [
                { text: 'Gengsi dong dibilang cemen, ayo berangkat!', targetId: 'scene_lorong_utama', fpChange: 10 },
                { text: 'Tetep nggak mau, maaf ya guys', targetId: 'end_failed', fpChange: -15 }
            ]
        },
        'scene_makan_taro': {
            title: 'Kamar Asrama - 22:45',
            text: 'Akhirnya kalian nggak jadi keluar. Kalian malah makan sisa camilan Taro beruntun sambil ngobrol pelan-pelan di kegelapan kamar. Gak dapet mie, tapi dapet kehangatan sahabat.',
            options: [
                { text: 'Tidur nyenyak', targetId: 'end_partner', fpChange: 10 }
            ]
        },
        'scene_lorong_utama': {
            title: 'Lorong Utama - 22:45',
            text: 'Kalian bertiga jalan jongkok ngelewatin kamar-kamar. Tiba-tiba terdengar suara "Tuk.. Tuk.. Tuk.." khas langkah kaki Ustadz Piket dari arah depan!',
            options: [
                { text: 'Cepat sembunyi di balik tumpukan lemari sepatu', targetId: 'scene_sembunyi', fpChange: 5 },
                { text: 'Panik! Lari sekencang-kencangnya balik ke kamar', targetId: 'scene_lari_panik', fpChange: -15 },
                { text: 'Tetap berdiri tegak dan pura-pura ngelindur jalan sambil tidur', targetId: 'scene_ngelindur', fpChange: 0 }
            ]
        },
        'scene_sembunyi': {
            title: 'Balik Lemari Sepatu - 22:46',
            text: 'Bau kaos kaki menyengat hidung kalian. Untungnya, Ustadz Piket lewat begitu saja sambil bawa senter. Kalian aman!',
            options: [
                { text: 'Lanjut ke gerbang', targetId: 'scene_gerbang', fpChange: 5 }
            ]
        },
        'scene_lari_panik': {
            title: 'Lorong Asrama - 22:46',
            text: 'Kamu lari duluan ninggalin {friend1} dan {friend2}. Karena panik, {friend2} malah nabrak tong sampah! BRAKK! Suaranya nyaring banget.',
            options: [
                { text: 'Balik badan buat bantu mereka berdiri', targetId: 'scene_bantu_jatuh', fpChange: 15 },
                { text: 'Bodo amat, nyelamatin diri sendiri dulu!', targetId: 'end_failed', fpChange: -20 }
            ]
        },
        'scene_bantu_jatuh': {
            title: 'Lorong Asrama - 22:47',
            text: 'Kamu balik bantu {friend2}. Sayangnya, gara-gara suara tadi, Ustadz Piket udah ada di depan kalian dengan muka garang. Skak mat.',
            options: [
                { text: 'Pasrah', targetId: 'end_ketahuan', fpChange: 0 }
            ]
        },
        'scene_ngelindur': {
            title: 'Lorong Utama - 22:47',
            text: 'Ustadz Piket langsung nyorot muka kalian bertiga. "Ngapain kalian malam-malam keluyuran?" suaranya berat dan menakutkan.',
            options: [
                { text: 'Jujur aja ustadz, laper mau beli mie di depan', targetId: 'end_ketahuan', fpChange: 5 },
                { text: 'Eh astaghfirullah ustadz, kami sakit perut mau ke kamar mandi bareng', targetId: 'scene_alasan_wc', fpChange: 5 }
            ]
        },
        'scene_alasan_wc': {
            title: 'Jalan ke Masjid - 22:50',
            text: 'Ustadz mengangguk. "Yaudah cepet, habis itu tidur." Kalian pura-pura jalan ke arah kamar mandi masjid, yang bikin rute ke gerbang jadi memutar jauh.',
            options: [
                { text: 'Terobos semak-semak belakang masjid', targetId: 'scene_gerbang', fpChange: 5 }
            ]
        },
        'scene_gerbang': {
            title: 'Gerbang Utama - 22:55',
            text: 'Gerbang udah di depan mata. Tapi astaga... gembok gedenya udah dipasang. Ada celah lumayan di bawah pagar, atau bisa manjat tembok belakang warung.',
            options: [
                { text: 'Udah nyerah aja, kita balik kamar', targetId: 'end_terkunci', fpChange: -5 },
                { text: 'Merayap kotor-kotoran di celah bawah pagar', targetId: 'scene_merayap', fpChange: 10 },
                { text: 'Manjat tembok bareng-bareng', targetId: 'scene_manjat', fpChange: 10 }
            ]
        },
        'scene_merayap': {
            title: 'Bawah Pagar - 22:58',
            text: '{friend2} berhasil lewat duluan. Pas giliran {friend1}, sarungnya nyangkut parah. Dia stuck di tengah-tengah!',
            options: [
                { text: 'Tarik dia sekuat tenaga dari luar', targetId: 'scene_warung', fpChange: 15 },
                { text: 'Ketawain dulu puas-puas, baru bantuin ditarik', targetId: 'scene_warung', fpChange: 5 }
            ]
        },
        'scene_manjat': {
            title: 'Tembok Belakang - 22:58',
            text: 'Kamu sukses naik ke atas tembok. Pas narik {friend1}, eh {friend2} yang di bawah malah kepleset masuk semak berduri.',
            options: [
                { text: 'Cepat turun dan narik {friend2} naik', targetId: 'scene_warung', fpChange: 15 },
                { text: 'Tinggalin bentar ah, biarin dia nyari jalan sendiri', targetId: 'scene_warung', fpChange: -10 }
            ]
        },
        'scene_warung': {
            title: 'Warung Mang Koko - 23:05',
            text: 'Akhirnya! Aroma Indomie rebus pakai telor dan saos tercium wangi banget. Mang Koko udah siap nyeduh.',
            options: [
                { text: 'Sok asik traktir mereka berdua', targetId: 'scene_balik', fpChange: 20 },
                { text: 'Bayar masing-masing aja, uang tipis', targetId: 'scene_balik', fpChange: 5 }
            ]
        },
        'scene_balik': {
            title: 'Perjalanan Pulang - 23:30',
            text: 'Kenyang! Perut penuh dan hati senang. Sekarang misinya adalah balik ke kasur tanpa ketahuan siapa pun.',
            options: [
                { text: 'Masuk lewat jalur utama (lorong asrama)', targetId: 'scene_masuk_utama', fpChange: -5 },
                { text: 'Masuk lewat jendela belakang', targetId: 'scene_masuk_jendela', fpChange: 10 }
            ]
        },
        'scene_masuk_utama': {
            title: 'Lorong Asrama - 23:35',
            text: 'Kalian ngendap-ngendap lagi. Tapi saking gelapnya, kalian salah masuk pintu dan... TERANG BENDERANG! Ternyata itu kamar anak pengurus (OSIS) yang lagi rapat evaluasi.',
            options: [
                { text: 'Mati kutu', targetId: 'end_salah_kamar', fpChange: 0 }
            ]
        },
        'scene_masuk_jendela': {
            title: 'Jendela Kamar - 23:35',
            text: 'Satu per satu masuk lewat jendela dengan perlahan. Berhasil! Kalian akhirnya tepar di kasur masing-masing sambil tersenyum puas.',
            options: [
                { text: 'Akhirnya tidur...', targetId: 'check_final_ending', fpChange: 0 }
            ]
        }
    };

    const randomEvents = [
        {
            text: 'Seekor kucing tiba-tiba melompat dari atas lemari ke depan kalian! Suaranya cukup keras.',
            options: [
                { text: 'Tahan napas dan diam mematung', fpChange: 5 },
                { text: 'Kaget dan tanpa sadar bilang "Ayam!"', fpChange: -5 }
            ]
        },
        {
            text: '{friend2} baru sadar sebelah sandalnya ketinggalan di depan kamar. Dia panik.',
            options: [
                { text: 'Kasih sandalmu buat dia, kamu nyeker', fpChange: 10 },
                { text: 'Ketawain dan suruh dia nyeker', fpChange: -5 }
            ]
        },
        {
            text: 'Lampu lorong tiba-tiba mati total. {friend1} yang penakut langsung megang pundakmu keras banget.',
            options: [
                { text: 'Pegang balik tangannya biar dia tenang', fpChange: 10 },
                { text: 'Tepisin tangannya buat iseng ngerjain', fpChange: -10 }
            ]
        }
    ];

    let epCurrentFP = 0;
    let epSavedTargetId = null;
    let epPlayerName = 'Qory';
    let epFriend1 = 'Hadid';
    let epFriend2 = 'Hafizh';

    function parseEpText(text) {
        if (!text) return '';
        return text
            .replace(/\{player\}/g, epPlayerName)
            .replace(/\{friend1\}/g, epFriend1)
            .replace(/\{friend2\}/g, epFriend2);
    }

    function showEpCharScreen() {
        document.getElementById('ep-start-screen').style.display = 'none';
        document.getElementById('ep-char-screen').style.display = 'block';
    }

    function selectEpCharacter(name) {
        epPlayerName = name;
        if (name === 'Qory') { epFriend1 = 'Hadid'; epFriend2 = 'Hafizh'; }
        else if (name === 'Hadid') { epFriend1 = 'Qory'; epFriend2 = 'Hafizh'; }
        else if (name === 'Hafizh') { epFriend1 = 'Qory'; epFriend2 = 'Hadid'; }
        startEpGameplay();
    }

    function startEscapePesantren() {
        showPage('escape-pesantren');
        document.getElementById('ep-start-screen').style.display = 'block';
        document.getElementById('ep-char-screen').style.display = 'none';
        document.getElementById('ep-game-screen').style.display = 'none';
        document.getElementById('ep-event-screen').style.display = 'none';
        document.getElementById('ep-result-screen').style.display = 'none';
        document.getElementById('ep-collection-screen').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function startEpGameplay() {
        epCurrentFP = 0;
        document.getElementById('ep-fp-score').innerText = epCurrentFP;
        
        document.getElementById('ep-start-screen').style.display = 'none';
        document.getElementById('ep-char-screen').style.display = 'none';
        document.getElementById('ep-result-screen').style.display = 'none';
        document.getElementById('ep-game-screen').style.display = 'block';
        
        renderEpScene('start');
    }

    function renderEpScene(nodeId) {
        if (nodeId === 'check_final_ending') {
            if (epCurrentFP >= 50) {
                nodeId = 'end_never_dies';
            } else if (epCurrentFP >= 20) {
                nodeId = 'end_partner';
            } else {
                nodeId = 'end_success';
            }
        }
        
        if (nodeId.startsWith('end_')) {
            showEpResult(nodeId);
            return;
        }

        const scene = epNodes[nodeId];
        const sceneEl = document.getElementById('ep-scene-content');
        
        sceneEl.classList.remove('ep-scene-fade');
        void sceneEl.offsetWidth; // reflow
        sceneEl.classList.add('ep-scene-fade');

        document.getElementById('ep-scene-title').innerText = scene.title;
        document.getElementById('ep-story-text').innerText = parseEpText(scene.text);
        
        const optionsEl = document.getElementById('ep-options');
        optionsEl.innerHTML = '';
        
        scene.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'ep-option-btn';
            btn.innerText = parseEpText(opt.text);
            btn.onclick = () => handleEpOption(opt.targetId, opt.fpChange);
            optionsEl.appendChild(btn);
        });
    }

    function handleEpOption(targetId, fpChange) {
        epCurrentFP += fpChange;
        document.getElementById('ep-fp-score').innerText = epCurrentFP;
        
        const sceneEl = document.getElementById('ep-scene-content');
        sceneEl.classList.remove('ep-scene-fade');
        sceneEl.classList.add('ep-scene-fade-out');
        
        setTimeout(() => {
            sceneEl.classList.remove('ep-scene-fade-out');
            
            // 15% peluang Random Event
            if (Math.random() < 0.15 && !targetId.startsWith('end_') && targetId !== 'start' && targetId !== 'check_final_ending') {
                epSavedTargetId = targetId;
                showEpEvent();
            } else {
                renderEpScene(targetId);
            }
        }, 300);
    }

    function showEpEvent() {
        document.getElementById('ep-game-screen').style.display = 'none';
        document.getElementById('ep-event-screen').style.display = 'block';
        
        const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
        document.getElementById('ep-event-text').innerText = parseEpText(event.text);
        
        const optionsEl = document.getElementById('ep-event-options');
        optionsEl.innerHTML = '';
        
        event.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'ep-option-btn';
            btn.innerText = parseEpText(opt.text);
            btn.onclick = () => {
                epCurrentFP += opt.fpChange;
                document.getElementById('ep-fp-score').innerText = epCurrentFP;
                
                document.getElementById('ep-event-screen').style.display = 'none';
                document.getElementById('ep-game-screen').style.display = 'block';
                renderEpScene(epSavedTargetId);
            };
            optionsEl.appendChild(btn);
        });
    }

    function showEpResult(endingId) {
        document.getElementById('ep-game-screen').style.display = 'none';
        
        const ending = epEndings[endingId];
        document.getElementById('ep-ending-title').innerText = `${ending.icon} ${ending.title}`;
        document.getElementById('ep-ending-stars').innerText = ending.stars;
        document.getElementById('ep-ending-fp').innerText = epCurrentFP;
        document.getElementById('ep-ending-desc').innerText = `"${parseEpText(ending.desc)}"`;
        
        saveEpEnding(endingId);
        
        document.getElementById('ep-result-screen').style.display = 'block';
        
        const resultEl = document.getElementById('ep-result-screen');
        resultEl.style.animation = 'none';
        void resultEl.offsetWidth;
        resultEl.style.animation = 'fadeIn 0.5s ease';
    }

    function saveEpEnding(endingId) {
        let saved = JSON.parse(localStorage.getItem('pesantren_endings') || '[]');
        if (!saved.includes(endingId)) {
            saved.push(endingId);
            localStorage.setItem('pesantren_endings', JSON.stringify(saved));
            document.getElementById('ep-ending-status').innerText = 'ENDING BARU DITEMUKAN!';
            document.getElementById('ep-ending-status').style.background = '#e9c46a';
        } else {
            document.getElementById('ep-ending-status').innerText = 'SUDAH PERNAH DICAPAI';
            document.getElementById('ep-ending-status').style.background = '#d0c9c0';
        }
    }

    function showEpCollection() {
        document.getElementById('ep-start-screen').style.display = 'none';
        document.getElementById('ep-result-screen').style.display = 'none';
        
        const saved = JSON.parse(localStorage.getItem('pesantren_endings') || '[]');
        const total = Object.keys(epEndings).length;
        
        document.getElementById('ep-collection-progress').innerText = `${saved.length}/${total} Ending Ditemukan`;
        
        const listEl = document.getElementById('ep-collection-list');
        listEl.innerHTML = '';
        
        Object.values(epEndings).forEach(end => {
            const isUnlocked = saved.includes(end.id);
            
            const item = document.createElement('div');
            item.className = `ep-ending-item ${isUnlocked ? 'unlocked' : ''}`;
            
            item.innerHTML = `
                <div class="ep-ending-icon">${isUnlocked ? end.icon : '🔒'}</div>
                <div class="ep-ending-info">
                    <h4>${isUnlocked ? end.title : 'Ending Terkunci'}</h4>
                    <p>${isUnlocked ? parseEpText(end.desc) : 'Mainkan game dengan pilihan berbeda untuk membuka ending ini.'}</p>
                </div>
            `;
            listEl.appendChild(item);
        });
        
        document.getElementById('ep-collection-screen').style.display = 'block';
    }

    console.log("Website Sahabat Story siap!");

    // Init Lucide icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // ========== MUSIC PLAYER ==========
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;
    let musicStarted = false;

    if (bgMusic) {
        bgMusic.volume = 0.3;
        
        function playMusic() {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicToggle.classList.remove('muted');
                document.getElementById('iconPlaying').style.display = '';
                document.getElementById('iconMuted').style.display = 'none';
            }).catch((error) => {
                console.log("Autoplay dicegah:", error);
                musicToggle.classList.add('muted');
                document.getElementById('iconPlaying').style.display = 'none';
                document.getElementById('iconMuted').style.display = '';
            });
        }

        function pauseMusic() {
            bgMusic.pause();
            isPlaying = false;
            musicToggle.classList.add('muted');
            document.getElementById('iconPlaying').style.display = 'none';
            document.getElementById('iconMuted').style.display = '';
        }

        function toggleMusic() {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        }

        musicToggle.addEventListener('click', toggleMusic);

        function startMusicOnInteraction() {
            if (!musicStarted) {
                playMusic();
                musicStarted = true;
                document.removeEventListener('click', startMusicOnInteraction);
                document.removeEventListener('touchstart', startMusicOnInteraction);
                document.removeEventListener('keydown', startMusicOnInteraction);
            }
        }

        document.addEventListener('click', startMusicOnInteraction);
        document.addEventListener('touchstart', startMusicOnInteraction);
        document.addEventListener('keydown', startMusicOnInteraction);

        setTimeout(() => {
            if (!musicStarted) {
                playMusic().catch(() => {});
            }
        }, 1000);
    } 