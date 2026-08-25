/* =====================================================
   DREAM FURNITURE
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Luna Velvet Sofa",
        category: "Sofas",
        price: 45999,
        image: "images/sofa4.jfif",
        description: "Soft velvet upholstery with elegant modern curves.",
        badge: "BESTSELLER"
    },

    {
        id: 2,
        name: "Aria Lounge Sofa",
        category: "Sofas",
        price: 38999,
        image: "images/sofa5.jfif",
        description: "Relaxed proportions designed for everyday comfort.",
        badge: "NEW"
    },

    {
        id: 3,
        name: "Monaco Coffee Table",
        category: "Tables",
        price: 18999,
        image: "images/tab1.jfif",
        description: "Minimal wooden coffee table with timeless appeal.",
        badge: "POPULAR"
    },

    {
        id: 4,
        name: "Oakline Dining Table",
        category: "Tables",
        price: 32999,
        image: "images/tab2.jfif",
        description: "Solid oak dining table made for memorable gatherings.",
        badge: "PREMIUM"
    },

    {
        id: 5,
        name: "Eames Lounge Chair",
        category: "Chairs",
        price: 2999,
        image: "images/chairss1.jfif",
        description: "Iconic silhouette with exceptional comfort.",
        badge: "ICONIC"
    },

    {
        id: 6,
        name: "Nora Accent Chair",
        category: "Chairs",
        price: 1999,
        image: "images/chairss2.jfif",
        description: "Elegant accent chair for sophisticated interiors.",
        badge: "NEW"
    },

    {
        id: 7,
        name: "Marble Luxe Chair",
        category: "Chairs",
        price: 2999,
        image: "images/chairss3.jfif",
        description: "Premium marble surface with a contemporary base.",
        badge: "LUXURY"
    },

    {
        id: 8,
        name: "Cloud Comfort Sofa",
        category: "Sofas",
        price: 52999,
        image: "images/sofas2.jfif",
        description: "Deep seating and soft cushions for ultimate relaxation.",
        badge: "PREMIUM"
    },

    {
        id: 9,
        name: "King size bed",
        category: "Bed",
        price: 30999,
        image: "images/spacejoy-RUvW1KGD9a4-unsplash.jpg",
        description: "Deep seating and soft cushions for ultimate relaxation.",
        badge: "PREMIUM"
    },

    {
        id: 10,
        name: "Luxery bed",
        category: "Bed",
        price: 15999,
        image: "images/spacejoy-nEtpvJjnPVo-unsplash.jpg",
        description: "Soft cushions for ultimate relaxation.",
        badge: "PREMIUM"
    },

    {
        id: 11,
        name: "Amezing Stylish Bed",
        category: "Bed",
        price: 15999,
        image: "images/bed4.webp",
        description: "Premium soft stylishb bed.",
        badge: "PREMIUM"
    },

    {
        id: 12,
        name: "King Shahi bed",
        category: "Bed",
        price: 30999,
        image: "images/beds1.jfif",
        description: "Shahi king style bed.",
        badge: "PREMIUM"
    }

];


/* =====================================================
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("dreamFurnitureCart")
    ) || [];


/* =====================================================
   WISHLIST
===================================================== */

let wishlist =
    JSON.parse(
        localStorage.getItem("dreamFurnitureWishlist")
    ) || [];


/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {

        style: "currency",

        currency: "INR",

        maximumFractionDigits: 0

    }).format(price);

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(category = "All") {

    const container =
        document.getElementById("productContainer");

    if (!container) return;


    let filteredProducts;


    if (category === "All") {

        filteredProducts = products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    if (filteredProducts.length === 0) {

        container.innerHTML = `

            <div class="col-12 text-center py-5">

                <i class="bi bi-search fs-1 text-muted"></i>

                <h4 class="mt-3">
                    No products found
                </h4>

                <p class="text-muted">
                    Try another category.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filteredProducts.map(product => {

            const isWishlisted =
                wishlist.includes(product.id);


            return `

                <div class="col-sm-6 col-lg-4 col-xl-3 reveal show">

                    <div class="product-card">

                        <div class="product-image-wrapper">

                            <span class="product-badge">
                                ${product.badge}
                            </span>


                            <!-- WISHLIST BUTTON -->

                            <button

                                class="wishlist-btn ${
                                    isWishlisted
                                        ? "active"
                                        : ""
                                }"

                                onclick="
                                    toggleWishlist(
                                        ${product.id},
                                        this
                                    )
                                "

                                title="Add to wishlist">

                                <i class="bi ${
                                    isWishlisted
                                        ? "bi-heart-fill"
                                        : "bi-heart"
                                }"></i>

                            </button>


                            <!-- PRODUCT IMAGE -->

                            <img

                                src="${product.image}"

                                class="product-img"

                                alt="${product.name}"

                                onclick="
                                    openImage(
                                        '${product.image}',
                                        '${product.name}'
                                    )
                                ">

                        </div>


                        <div class="product-body">

                            <div class="product-category">
                                ${product.category}
                            </div>


                            <h3 class="product-name">
                                ${product.name}
                            </h3>


                            <p class="product-description mb-3">
                                ${product.description}
                            </p>


                            <div class="
                                d-flex
                                align-items-center
                                justify-content-between
                            ">

                                <div>

                                    <div class="product-price">
                                        ${formatPrice(
                                            product.price
                                        )}
                                    </div>

                                </div>


                                <!-- ADD CART -->

                                <button

                                    class="add-cart-btn"

                                    onclick="
                                        addToCart(
                                            ${product.id}
                                        )
                                    "

                                    title="Add to cart">

                                    <i class="bi bi-bag-plus"></i>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterCategory(
    category,
    button = null
) {

    displayProducts(category);


    if (button) {

        document
            .querySelectorAll(".filter-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );


        button.classList.add("active");

    }


    const shopSection =
        document.getElementById("shop");


    if (
        shopSection &&
        event &&
        event.currentTarget?.classList.contains(
            "category-card"
        )
    ) {

        shopSection.scrollIntoView({

            behavior: "smooth"

        });

    }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existingItem =
        cart.find(
            item => item.id === productId
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    updateCartUI();

    showToast(
        `${product.name} added to your cart.`
    );

}


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(

        "dreamFurnitureCart",

        JSON.stringify(cart)

    );

}


/* =====================================================
   UPDATE CART UI
===================================================== */

function updateCartUI() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartSummary =
        document.getElementById("cartSummary");

    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartCount) return;


    const totalQuantity =
        cart.reduce(

            (sum, item) =>
                sum + item.quantity,

            0

        );


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        emptyCart.classList.remove("d-none");

        cartSummary.classList.add("d-none");

        cartItems.innerHTML = "";

        return;

    }


    emptyCart.classList.add("d-none");

    cartSummary.classList.remove("d-none");


    cartItems.innerHTML =

        cart.map(item => `

            <div class="cart-item">

                <div class="d-flex gap-3">

                    <img
                        src="${item.image}"
                        alt="${item.name}">


                    <div class="flex-grow-1">

                        <div class="
                            d-flex
                            justify-content-between
                            gap-2
                        ">

                            <h6 class="mb-1">
                                ${item.name}
                            </h6>


                            <button

                                class="remove-btn"

                                onclick="
                                    removeFromCart(
                                        ${item.id}
                                    )
                                ">

                                <i class="bi bi-trash"></i>

                            </button>

                        </div>


                        <small class="text-muted">
                            ${item.category}
                        </small>


                        <div class="
                            d-flex
                            align-items-center
                            justify-content-between
                            mt-3
                        ">

                            <strong>

                                ${formatPrice(
                                    item.price *
                                    item.quantity
                                )}

                            </strong>


                            <div class="
                                d-flex
                                align-items-center
                                gap-2
                            ">

                                <button

                                    class="quantity-btn"

                                    onclick="
                                        changeQuantity(
                                            ${item.id},
                                            -1
                                        )
                                    ">

                                    <i class="bi bi-dash"></i>

                                </button>


                                <span>
                                    ${item.quantity}
                                </span>


                                <button

                                    class="quantity-btn"

                                    onclick="
                                        changeQuantity(
                                            ${item.id},
                                            1
                                        )
                                    ">

                                    <i class="bi bi-plus"></i>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `).join("");


    const total =
        cart.reduce(

            (sum, item) =>
                sum + item.price * item.quantity,

            0

        );


    cartTotal.textContent =
        formatPrice(total);

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item => item.id === productId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    item.id !== productId
            );

    }


    saveCart();

    updateCartUI();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(productId) {

    const item =
        cart.find(
            item => item.id === productId
        );


    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();

    updateCartUI();


    if (item) {

        showToast(
            `${item.name} removed from cart.`
        );

    }

}


/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(
    productId,
    button
) {

    const index =
        wishlist.indexOf(productId);


    if (index === -1) {

        wishlist.push(productId);


        if (button) {

            button.classList.add(
                "active"
            );

            button.innerHTML =
                `<i class="bi bi-heart-fill"></i>`;

        }


        showToast(
            "Added to your wishlist."
        );

    } else {

        wishlist.splice(
            index,
            1
        );


        if (button) {

            button.classList.remove(
                "active"
            );

            button.innerHTML =
                `<i class="bi bi-heart"></i>`;

        }


        showToast(
            "Removed from wishlist."
        );

    }


    localStorage.setItem(

        "dreamFurnitureWishlist",

        JSON.stringify(wishlist)

    );


    updateWishlistUI();

}


/* =====================================================
   UPDATE WISHLIST UI
===================================================== */

function updateWishlistUI() {

    const wishlistCount =
        document.getElementById(
            "wishlistCount"
        );

    const wishlistItems =
        document.getElementById(
            "wishlistItems"
        );

    const emptyWishlist =
        document.getElementById(
            "emptyWishlist"
        );


    if (
        !wishlistCount ||
        !wishlistItems ||
        !emptyWishlist
    ) {

        return;

    }


    /* UPDATE COUNT */

    wishlistCount.textContent =
        wishlist.length;


    /* EMPTY WISHLIST */

    if (wishlist.length === 0) {

        emptyWishlist.classList.remove(
            "d-none"
        );

        wishlistItems.innerHTML = "";

        return;

    }


    emptyWishlist.classList.add(
        "d-none"
    );


    /* GET WISHLIST PRODUCTS */

    const wishlistProducts =
        wishlist

            .map(
                productId =>
                    products.find(
                        product =>
                            product.id ===
                            productId
                    )
            )

            .filter(Boolean);


    /* DISPLAY WISHLIST */

    wishlistItems.innerHTML =

        wishlistProducts.map(
            product => `

                <div class="wishlist-item">

                    <div class="
                        d-flex
                        gap-3
                        align-items-start
                    ">

                        <img

                            src="${product.image}"

                            alt="${product.name}">


                        <div class="flex-grow-1">

                            <div class="
                                d-flex
                                justify-content-between
                                gap-2
                            ">

                                <h6 class="mb-1">
                                    ${product.name}
                                </h6>


                                <!-- REMOVE -->

                                <button

                                    class="
                                        wishlist-remove-btn
                                    "

                                    onclick="
                                        removeFromWishlist(
                                            ${product.id}
                                        )
                                    "

                                    title="
                                        Remove from wishlist
                                    ">

                                    <i class="
                                        bi bi-trash
                                    "></i>

                                </button>

                            </div>


                            <small class="text-muted">

                                ${product.category}

                            </small>


                            <div class="
                                d-flex
                                align-items-center
                                justify-content-between
                                gap-2
                                mt-3
                            ">

                                <strong>

                                    ${formatPrice(
                                        product.price
                                    )}

                                </strong>


                                <!-- ADD TO CART -->

                                <button

                                    class="
                                        wishlist-add-cart
                                    "

                                    onclick="
                                        addWishlistItemToCart(
                                            ${product.id}
                                        )
                                    ">

                                    <i class="
                                        bi bi-bag-plus me-1
                                    "></i>

                                    Add to Cart

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            `
        ).join("");

}


/* =====================================================
   REMOVE FROM WISHLIST
===================================================== */

function removeFromWishlist(productId) {

    const product =
        products.find(
            product =>
                product.id === productId
        );


    wishlist =
        wishlist.filter(
            id =>
                id !== productId
        );


    localStorage.setItem(

        "dreamFurnitureWishlist",

        JSON.stringify(wishlist)

    );


    updateWishlistUI();


    /*
       Re-display products so the
       heart icon becomes empty.
    */

    displayProducts();


    if (product) {

        showToast(
            `${product.name} removed from wishlist.`
        );

    }

}


/* =====================================================
   ADD WISHLIST ITEM TO CART
===================================================== */

function addWishlistItemToCart(
    productId
) {

    addToCart(productId);

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts(query) {

    const results =
        document.getElementById(
            "searchResults"
        );


    if (!results) return;


    const search =
        query
            .toLowerCase()
            .trim();


    if (!search) {

        results.innerHTML = `

            <p class="
                text-muted
                text-center
                py-3
            ">

                Start typing to search furniture.

            </p>

        `;

        return;

    }


    const matchedProducts =
        products.filter(

            product =>

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search)

                ||

                product.description
                    .toLowerCase()
                    .includes(search)

        );


    if (matchedProducts.length === 0) {

        results.innerHTML = `

            <div class="
                text-center
                py-4
            ">

                <i class="
                    bi bi-search
                    fs-2
                    text-muted
                "></i>

                <p class="
                    text-muted
                    mt-2
                ">

                    No furniture found.

                </p>

            </div>

        `;

        return;

    }


    results.innerHTML =

        matchedProducts.map(
            product => `

                <div

                    class="
                        search-result
                        d-flex
                        align-items-center
                        gap-3
                    "

                    onclick="
                        selectSearchProduct(
                            ${product.id}
                        )
                    ">

                    <img

                        src="${product.image}"

                        width="60"

                        height="60"

                        style="
                            object-fit:cover;
                            border-radius:12px;
                        "

                        alt="${product.name}">


                    <div class="flex-grow-1">

                        <strong>
                            ${product.name}
                        </strong>


                        <small class="
                            d-block
                            text-muted
                        ">

                            ${product.category}

                        </small>

                    </div>


                    <strong>

                        ${formatPrice(
                            product.price
                        )}

                    </strong>

                </div>

            `
        ).join("");

}


/* =====================================================
   SELECT SEARCH PRODUCT
===================================================== */

function selectSearchProduct(
    productId
) {

    const modalElement =
        document.getElementById(
            "searchModal"
        );


    const modal =
        bootstrap.Modal.getInstance(
            modalElement
        );


    if (modal) {

        modal.hide();

    }


    setTimeout(() => {

        const product =
            products.find(
                item =>
                    item.id === productId
            );


        if (product) {

            openImage(
                product.image,
                product.name
            );

        }

    }, 300);

}


/* =====================================================
   IMAGE POPUP
===================================================== */

function openImage(
    image,
    name
) {

    const popupImage =
        document.getElementById(
            "popupImage"
        );


    popupImage.src =
        image;


    popupImage.alt =
        name;


    const modal =
        new bootstrap.Modal(

            document.getElementById(
                "imageModal"
            )

        );


    modal.show();

}


/* =====================================================
   TOAST
===================================================== */

function showToast(
    message
) {

    const toastElement =
        document.getElementById(
            "liveToast"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toastElement ||
        !toastMessage) {

        return;

    }


    toastMessage.textContent =
        message;


    const toast =
        new bootstrap.Toast(

            toastElement,

            {

                delay: 2500

            }

        );


    toast.show();

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    const total =
        cart.reduce(

            (sum, item) =>
                sum +
                item.price *
                item.quantity,

            0

        );


    alert(

        `Thank you for shopping with DREAM FURNITURE!\n\n` +

        `Items: ${
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.quantity,
                0
            )
        }\n` +

        `Total: ${
            formatPrice(total)
        }\n\n` +

        `Checkout functionality can be connected to your backend/payment gateway.`

    );

}


/* =====================================================
   CONTACT FORM
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const contactForm =
            document.getElementById(
                "contactForm"
            );


        if (contactForm) {

            contactForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const name =
                        document
                            .getElementById(
                                "contactName"
                            )
                            .value
                            .trim();


                    showToast(

                        `Thank you ${name}! Your message has been sent.`

                    );


                    contactForm.reset();

                }
            );

        }

    }
);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener(
    "scroll",
    function () {

        const navbar =
            document.getElementById(
                "mainNavbar"
            );


        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

function revealOnScroll() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const windowHeight =
        window.innerHeight;


    elements.forEach(
        element => {

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts("All");

        updateCartUI();

        updateWishlistUI();

        revealOnScroll();

    }
);


/* =====================================================
   CLOSE MOBILE NAVBAR AFTER CLICK
===================================================== */

document
    .querySelectorAll(
        ".navbar-nav .nav-link"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function () {

                    const navbarContent =
                        document.getElementById(
                            "navbarContent"
                        );


                    if (
                        navbarContent &&
                        navbarContent.classList.contains(
                            "show"
                        )
                    ) {

                        bootstrap.Collapse
                            .getOrCreateInstance(
                                navbarContent
                            )
                            .hide();

                    }

                }
            );

        }
    );


/* =====================================================
   SEARCH MODAL RESET
===================================================== */

const searchModal =
    document.getElementById(
        "searchModal"
    );


if (searchModal) {

    searchModal.addEventListener(

        "hidden.bs.modal",

        function () {

            const searchInput =
                document.getElementById(
                    "searchInput"
                );


            const searchResults =
                document.getElementById(
                    "searchResults"
                );


            if (searchInput) {

                searchInput.value = "";

            }


            if (searchResults) {

                searchResults.innerHTML = `

                    <p class="
                        text-muted
                        text-center
                        py-3
                    ">

                        Start typing to search furniture.

                    </p>

                `;

            }

        }

    );

}