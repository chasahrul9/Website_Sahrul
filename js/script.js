const sahrul_products = [
    {
        id: 1,
        name: "Espresso",
        category: "Coffee",
        price: 18000,
        desc: "Kopi espresso pekat dengan aroma khas dan karakter rasa yang kuat.",
        img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 2,
        name: "Americano",
        category: "Coffee",
        price: 22000,
        desc: "Espresso dengan air panas yang menghasilkan kopi hitam dengan rasa bersih.",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 3,
        name: "Cafe Latte",
        category: "Coffee",
        price: 25000,
        desc: "Espresso yang dipadukan dengan susu steamed sehingga menghasilkan rasa lembut dan creamy.",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 4,
        name: "Cappuccino",
        category: "Coffee",
        price: 25000,
        desc: "Perpaduan espresso, susu steamed, dan foam susu dengan tekstur lembut.",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 5,
        name: "Caramel Latte",
        category: "Coffee",
        price: 28000,
        desc: "Espresso dan susu dengan tambahan sirup caramel yang manis dan lembut.",
        img: "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 7,
        name: "Matcha Latte",
        category: "Non Coffee",
        price: 28000,
        desc: "Minuman matcha dengan perpaduan susu yang creamy dan aroma teh hijau.",
        img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 8,
        name: "Chocolate",
        category: "Non Coffee",
        price: 25000,
        desc: "Minuman cokelat dengan rasa cokelat pekat, manis, dan tekstur creamy.",
        img: "https://media.istockphoto.com/id/868861636/id/foto/milkshake-cokelat-lezat.jpg?s=612x612&w=0&k=20&c=dIW4h1NEmWp1fvgASCoaQ-bPmTk4arnHWzpRm4lE14M="
    },
    {
        id: 9,
        name: "Red Velvet",
        category: "Non Coffee",
        price: 27000,
        desc: "Minuman red velvet dengan rasa manis dan perpaduan susu yang lembut.",
        img: "https://media.istockphoto.com/id/2215582070/id/foto/es-beludru-merah-latte-di-kafe-mewah.jpg?s=612x612&w=0&k=20&c=2442ixW8lPcCsvFSsaW_E-SE4OW-CPjlaiH1Vl4Tl1Y="
    },
    {
        id: 11,
        name: "Lemon Tea",
        category: "Non Coffee",
        price: 20000,
        desc: "Teh dengan perpaduan lemon yang memberikan rasa segar dan sedikit asam.",
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 12,
        name: "Lychee Tea",
        category: "Non Coffee",
        price: 22000,
        desc: "Teh segar dengan aroma dan rasa buah leci yang manis.",
        img: "https://media.istockphoto.com/id/2012178699/id/foto/es-teh-leci-dengan-daun-mint.jpg?s=612x612&w=0&k=20&c=QGNzyACp5CpdJVgffKYIYuH5buJfxmEX84K-2RVH4vM="
    },
    {
        id: 13,
        name: "Beef Burger",
        category: "Food",
        price: 35000,
        desc: "Burger dengan daging sapi, sayuran segar, dan saus pilihan.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 14,
        name: "Chicken Rice",
        category: "Food",
        price: 30000,
        desc: "Hidangan nasi dengan olahan ayam dan pelengkap pilihan.",
        img: "https://media.istockphoto.com/id/506583996/id/foto/ayam-bakar-dengan-quinoa-dan-salad-beras-merah.jpg?s=612x612&w=0&k=20&c=LkJNp83aWUPWQZSWXroWXaBZ7y0naYFjLkXijkdBNNU="
    },
    {
        id: 15,
        name: "Chicken Katsu",
        category: "Food",
        price: 32000,
        desc: "Ayam berbalut tepung roti yang digoreng hingga renyah.",
        img: "https://media.istockphoto.com/id/2247460355/id/foto/kari-katsu-ayam-jepang-dengan-nasi.jpg?s=612x612&w=0&k=20&c=jW36Tm1_cqgtUSIUdY_u9MqnGQfLpS1XKjB7w7t8v0s="
    },
    {
        id: 16,
        name: "Spaghetti Bolognese",
        category: "Food",
        price: 32000,
        desc: "Spaghetti dengan saus bolognese berbahan dasar tomat dan daging.",
        img: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 17,
        name: "Aglio Olio",
        category: "Food",
        price: 30000,
        desc: "Pasta dengan bawang putih, minyak zaitun, dan bumbu pilihan.",
        img: "https://media.istockphoto.com/id/2253700347/id/foto/pasta-vegetarian-aglio-olio-dengan-sayuran-campuran.jpg?s=612x612&w=0&k=20&c=ZD5gAnjTKOL7jsCHl1oy5eN58gS_84DOpIBZqZ8pbvg="
    },
    {
        id: 18,
        name: "French Fries",
        category: "Snack",
        price: 18000,
        desc: "Kentang goreng renyah dengan taburan bumbu.",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 19,
        name: "Butter Croissant",
        category: "Dessert",
        price: 22000,
        desc: "Pastry berlapis dengan tekstur renyah di luar dan lembut di dalam.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 20,
        name: "Chocolate Brownies",
        category: "Dessert",
        price: 25000,
        desc: "Brownies cokelat dengan tekstur lembut dan rasa cokelat pekat.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 21,
        name: "Cheesecake",
        category: "Dessert",
        price: 28000,
        desc: "Kue keju dengan tekstur lembut dan rasa creamy.",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 22,
        name: "Waffle",
        category: "Dessert",
        price: 25000,
        desc: "Waffle hangat dengan tekstur renyah dan lembut.",
        img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 25,
        name: "Magic",
        category: "Coffee",
        price: 27000,
        desc: "Double ristretto dengan susu yang menghasilkan rasa kopi kuat dan tekstur creamy.",
        img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 26,
        name: "Piccolo",
        category: "Coffee",
        price: 23000,
        desc: "Ristretto yang dipadukan dengan sedikit susu steamed dalam sajian kecil.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 27,
        name: "Vanilla Latte",
        category: "Coffee",
        price: 28000,
        desc: "Espresso dan susu dengan sentuhan vanilla yang harum dan lembut.",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 33,
        name: "Peach Tea",
        category: "Non Coffee",
        price: 22000,
        desc: "Teh dengan sentuhan rasa peach yang ringan dan menyegarkan.",
        img: "https://media.istockphoto.com/id/2226054554/id/foto/es-teh-persik-dengan-irisan-persik-segar-dan-daun-mint-minuman-musim-panas.jpg?s=612x612&w=0&k=20&c=qENjVSLn02H_gCoJSaKWJclDdIWSfYiIdIKszWCt7Bg="
    },
    {
        id: 36,
        name: "Chicken Burger",
        category: "Food",
        price: 33000,
        desc: "Burger ayam dengan sayuran segar dan saus gurih.",
        img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 38,
        name: "Chicken Teriyaki Rice",
        category: "Food",
        price: 33000,
        desc: "Nasi dengan ayam saus teriyaki bercita rasa manis dan gurih.",
        img: "https://media.istockphoto.com/id/1304545428/id/foto/ayam-pedas-dalam-saus-manis-dan-asam-dengan-cabai-dan-nasi.jpg?s=612x612&w=0&k=20&c=5fzX1L4lMUq_slH29w-cwJVDJMcsynh7gc5yNvM4Irs="
    },
    {
        id: 39,
        name: "Beef Rice Bowl",
        category: "Food",
        price: 35000,
        desc: "Nasi hangat dengan irisan daging sapi dan saus gurih.",
        img: "https://media.istockphoto.com/id/1483210905/id/foto/semangkuk-nasi-daging-sapi-dengan-telur-onsen.jpg?s=612x612&w=0&k=20&c=xD_PV_iGkUZKVAbfM0ISCq3n44c4UGrQUrp5W-cco3I="
    },
    {
        id: 40,
        name: "Carbonara",
        category: "Food",
        price: 33000,
        desc: "Pasta dengan saus creamy dan taburan keju.",
        img: "https://media.istockphoto.com/id/181836969/id/foto/pasta-karbonara.jpg?s=612x612&w=0&k=20&c=OBonyAMY0PW6leGuE4iH5i1MRSX9knJ1QuhfUOxHXeA="
    },
    {
        id: 43,
        name: "Chicken Wings",
        category: "Snack",
        price: 28000,
        desc: "Sayap ayam dengan bumbu gurih dan saus pilihan.",
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 44,
        name: "Onion Rings",
        category: "Snack",
        price: 20000,
        desc: "Irisan bawang bombai berbalut tepung yang digoreng renyah.",
        img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 45,
        name: "Chicken Popcorn",
        category: "Snack",
        price: 23000,
        desc: "Potongan ayam kecil berbalut tepung renyah.",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 46,
        name: "Sausage",
        category: "Snack",
        price: 22000,
        desc: "Sosis panggang dengan saus pendamping.",
        img: "https://media.istockphoto.com/id/180812027/id/foto/sosis-italia.jpg?s=612x612&w=0&k=20&c=5vS7Y0I1M4qDSYnOUvvVDTKLJwvpyBXrcDS4SiI4of8="
    },
    {
        id: 47,
        name: "Nachos",
        category: "Snack",
        price: 25000,
        desc: "Keripik tortilla dengan saus keju dan pelengkap.",
        img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 48,
        name: "Toast",
        category: "Snack",
        price: 18000,
        desc: "Roti panggang dengan pilihan topping manis atau gurih.",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 49,
        name: "Pancakes",
        category: "Dessert",
        price: 26000,
        desc: "Pancake lembut dengan topping manis.",
        img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 50,
        name: "Cinnamon Roll",
        category: "Dessert",
        price: 24000,
        desc: "Roti gulung dengan aroma kayu manis dan lapisan manis.",
        img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1400&q=90"
    },
    {
        id: 51,
        name: "Cookies",
        category: "Dessert",
        price: 15000,
        desc: "Cookies dengan tekstur renyah di luar dan lembut di bagian tengah.",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=90"
    }
];


function sahrul_format_price(price) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(price);
}


function sahrul_get_cart() {
    try {
        return JSON.parse(localStorage.getItem("notreCart")) || [];
    } catch (error) {
        return [];
    }
}

function sahrul_save_cart(cart) {
    localStorage.setItem("notreCart", JSON.stringify(cart));
    sahrul_update_count();
}

function sahrul_update_count() {
    const cart = sahrul_get_cart();

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.qty || 0);
    }, 0);

    const elements = document.querySelectorAll(
        "#sahrul_cart_count, .sahrul_cart_count"
    );

    elements.forEach(element => {
        element.textContent = total;
    });
}

function sahrul_card(product) {
    return `
        <article class="sahrul_product_card">
            <a href="detail.html?id=${product.id}" class="sahrul_product_image">
                <img
                    src="${product.img}"
                    alt="${product.name}"
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="700"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x450?text=Notre+Socielle';"
                >
            </a>

            <div class="sahrul_product_meta">
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                </div>

                <strong class="sahrul_product_price">
                    ${sahrul_format_price(product.price)}
                </strong>
            </div>

            <p class="sahrul_product_description">
                ${product.desc}
            </p>

            <div class="sahrul_product_actions">
                <button
                    type="button"
                    class="sahrul_small_btn"
                    onclick="sahrul_add(${product.id})"
                >
                    ADD TO BAG
                </button>

                <a
                    class="sahrul_small_btn"
                    href="detail.html?id=${product.id}"
                >
                    DETAIL
                </a>
            </div>
        </article>
    `;
}

function sahrul_render_products(target, items) {
    const container = document.getElementById(target);

    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = "<p>Produk belum tersedia.</p>";
        return;
    }

    container.innerHTML = items.map(sahrul_card).join("");

    sahrul_setup_reveal(container);
}

function sahrul_add(id) {
    const product = sahrul_products.find(
        item => item.id === Number(id)
    );

    if (!product) return;

    const cart = sahrul_get_cart();

    const existing = cart.find(
        item => Number(item.id) === product.id
    );

    if (existing) {
        existing.qty = Number(existing.qty || 0) + 1;
    } else {
        cart.push({
            id: product.id,
            qty: 1
        });
    }

    sahrul_save_cart(cart);
    sahrul_render_cart();
    sahrul_render_order_summary();

    alert(product.name + " berhasil ditambahkan ke keranjang.");
}

function sahrul_render_cart() {
    const container = document.getElementById("sahrul_cart_items");

    if (!container) return;

    const cart = sahrul_get_cart();

    const validCart = cart.filter(item =>
        sahrul_products.some(
            product => product.id === Number(item.id)
        )
    );

    if (validCart.length === 0) {
        container.innerHTML = `
            <div class="sahrul_empty">
                <h3>Keranjang masih kosong</h3>
                <p>Silakan pilih menu favorit kamu.</p>
                <a class="sahrul_btn sahrul_btn_dark" href="menu.html">
                    LIHAT MENU
                </a>
            </div>
        `;

        sahrul_update_cart_total(0);
        return;
    }

    let total = 0;

    container.innerHTML = validCart.map(item => {
        const product = sahrul_products.find(
            p => p.id === Number(item.id)
        );

        const qty = Math.max(1, Number(item.qty) || 1);
        const subtotal = product.price * qty;

        total += subtotal;

        return `
            <div class="sahrul_cart_row">
                <img
                    src="${product.img}"
                    alt="${product.name}"
                    loading="lazy"
                    width="400"
                    height="400"
                    onerror="this.onerror=null;this.src='https://placehold.co/200x200?text=Product';"
                >

                <div>
                    <h4>${product.name}</h4>

                    <p>${sahrul_format_price(product.price)}</p>

                    <div class="sahrul_qty">
                        <button
                            type="button"
                            aria-label="Kurangi jumlah"
                            onclick="sahrul_change_qty(${product.id}, -1)"
                        >−</button>

                        <span>${qty}</span>

                        <button
                            type="button"
                            aria-label="Tambah jumlah"
                            onclick="sahrul_change_qty(${product.id}, 1)"
                        >+</button>
                    </div>

                    <button
                        type="button"
                        class="sahrul_remove"
                        onclick="sahrul_remove(${product.id})"
                    >
                        Hapus
                    </button>
                </div>

                <strong>${sahrul_format_price(subtotal)}</strong>
            </div>
        `;
    }).join("");

    sahrul_update_cart_total(total);
}

function sahrul_update_cart_total(total) {
    const ids = [
        "sahrul_subtotal",
        "sahrul_total"
    ];

    ids.forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = sahrul_format_price(total);
        }
    });
}

function sahrul_change_qty(id, change) {
    const cart = sahrul_get_cart();

    const item = cart.find(
        item => Number(item.id) === Number(id)
    );

    if (!item) return;

    item.qty = Number(item.qty || 1) + Number(change);

    const updatedCart = cart.filter(
        item => item.qty > 0
    );

    sahrul_save_cart(updatedCart);
    sahrul_render_cart();
    sahrul_render_order_summary();
}

function sahrul_remove(id) {
    const confirmation = confirm(
        "Apakah kamu yakin ingin menghapus produk ini?"
    );

    if (!confirmation) return;

    const updatedCart = sahrul_get_cart().filter(
        item => Number(item.id) !== Number(id)
    );

    sahrul_save_cart(updatedCart);
    sahrul_render_cart();
    sahrul_render_order_summary();
}

function sahrul_render_detail() {
    const container = document.getElementById(
        "sahrul_detail_content"
    );

    if (!container) return;

    const params = new URLSearchParams(
        window.location.search
    );

    const id = Number(params.get("id"));

    const product = sahrul_products.find(
        item => item.id === id
    );

    if (!product) {
        container.innerHTML = `
            <div class="sahrul_empty">
                <h2>Produk tidak ditemukan</h2>
                <a href="menu.html">Kembali ke Menu</a>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <article class="sahrul_detail_card">

            <img
                src="${product.img}"
                alt="${product.name}"
                loading="eager"
                decoding="async"
                width="1200"
                height="900"
                onerror="this.onerror=null;this.src='https://placehold.co/600x450?text=Product';"
            >

            <div>
                <p class="sahrul_eyebrow">
                    ${product.category}
                </p>

                <h2>${product.name}</h2>

                <p>${product.desc}</p>

                <div class="sahrul_detail_price">
                    ${sahrul_format_price(product.price)}
                </div>

                <button
                    type="button"
                    class="sahrul_btn sahrul_btn_dark"
                    onclick="sahrul_add(${product.id})"
                >
                    ADD TO BAG
                </button>

                <a class="sahrul_underlink" href="menu.html">
                    KEMBALI KE MENU ↗
                </a>
            </div>

        </article>
    `;
}

function sahrul_init_filters() {
    const buttons = document.querySelectorAll(
        ".sahrul_filter"
    );

    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener("click", function() {

            const category =
                this.dataset.category ||
                this.textContent.trim();

            buttons.forEach(item => {
                item.classList.remove("sahrul_active");
            });

            this.classList.add("sahrul_active");

            let filteredProducts;

            if (
                category.toLowerCase() === "all" ||
                category.toLowerCase() === "semua"
            ) {
                filteredProducts = sahrul_products;
            } else {
                filteredProducts = sahrul_products.filter(
                    product =>
                        product.category.toLowerCase() ===
                        category.toLowerCase()
                );
            }

            sahrul_render_products(
                "sahrul_menu_products",
                filteredProducts
            );

        });
    });
}

function sahrul_render_order_summary() {
    const summary = document.getElementById(
        "sahrul_order_summary"
    );

    if (!summary) return;

    const cart = sahrul_get_cart();

    if (cart.length === 0) {
        summary.textContent = "Belum ada item di keranjang.";
        return;
    }

    summary.innerHTML = cart.map(item => {

        const product = sahrul_products.find(
            product => product.id === Number(item.id)
        );

        if (!product) return "";

        return `
            <p>
                ${product.name} × ${item.qty}
                - ${sahrul_format_price(product.price * item.qty)}
            </p>
        `;

    }).join("");
}

function sahrul_init_forms() {

    /* FORM KONTAK */

    const contactForm = document.getElementById(
        "sahrul_contact_form"
    );

    if (contactForm) {

        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const feedback = document.getElementById(
                "sahrul_contact_feedback"
            );

            // EMAIL PEMILIK WEBSITE
            const sahrul_owner_email = "2403010149@unper.ac.id";

            const formData = new FormData(contactForm);

            const nama = formData.get("nama");
            const email = formData.get("email");
            const subjek = formData.get("subjek");
            const pesan = formData.get("pesan");

            if (!nama || !email || !subjek || !pesan) {
                if (feedback) {
                    feedback.textContent =
                        "Mohon lengkapi semua kolom formulir.";
                }

                return;
            }

            const subject = encodeURIComponent(subjek);

            const body = encodeURIComponent(
                "Nama: " + nama + "\n" +
                "Email: " + email + "\n\n" +
                "Pesan:\n" + pesan
            );

            const mailtoLink =
                "mailto:" + sahrul_owner_email +
                "?subject=" + subject +
                "&body=" + body;

            if (feedback) {
                feedback.textContent =
                    "Aplikasi email sedang dibuka. Tekan Send untuk mengirim pesan.";
            }

            window.location.href = mailtoLink;

        });

    }


    /* FORM CHECKOUT */

    const orderForm = document.getElementById(
        "sahrul_checkout_form"
    );

    if (orderForm) {

        orderForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const cart = sahrul_get_cart();

            if (cart.length === 0) {
                alert("Keranjang kamu masih kosong.");
                return;
            }

            const confirmation = confirm(
                "Apakah kamu yakin ingin menyelesaikan pesanan?"
            );

            if (!confirmation) return;

            const result = document.getElementById(
                "sahrul_checkout_result"
            );

            if (result) {
                result.hidden = false;

                result.textContent =
                    "Pesanan berhasil dibuat! Terima kasih sudah memesan di NOTRE SOCIELLE.";
            } else {
                alert(
                    "Pesanan berhasil dibuat! Terima kasih sudah memesan di NOTRE SOCIELLE."
                );
            }

            sahrul_save_cart([]);

            sahrul_render_cart();
            sahrul_render_order_summary();

            orderForm.reset();

        });

    }

}

function toggleNav() {
    const nav = document.getElementById("sahrul_nav");

    if (!nav) return;

    nav.classList.toggle("open");
}

function sahrul_setup_reveal(target = null) {

    const elements = target
        ? target.querySelectorAll(
            ".sahrul_reveal, .sahrul_product_card"
        )
        : document.querySelectorAll(
            ".sahrul_reveal, .sahrul_reveal_left, .sahrul_reveal_right, .sahrul_product_card"
        );

    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {
            element.classList.add("sahrul_visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "sahrul_visible"
                    );

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });

}

function sahrul_hero_animation() {

    const hero = document.querySelector(
        ".sahrul_hero"
    );

    if (!hero) return;

    hero.classList.add("sahrul_hero_loaded");

}

document.addEventListener("DOMContentLoaded", function() {

    // Update jumlah keranjang
    sahrul_update_count();

    // Produk unggulan halaman Home
    sahrul_render_products(
        "sahrul_featured_products",
        sahrul_products.slice(0, 3)
    );

    // Semua produk halaman Menu
    sahrul_render_products(
        "sahrul_menu_products",
        sahrul_products
    );

    // Semua produk halaman Order
    sahrul_render_products(
        "sahrul_order_products",
        sahrul_products
    );

    // Keranjang
    sahrul_render_cart();

    // Detail produk
    sahrul_render_detail();

    // Filter kategori
    sahrul_init_filters();

    // Formulir
    sahrul_init_forms();

    // Ringkasan pesanan
    sahrul_render_order_summary();

    // Animasi
    sahrul_setup_reveal();
    sahrul_hero_animation();

});
