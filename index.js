let users_50_bitrix24_box = document.querySelector(".users-50-bitrix24-box"),
    users_100_bitrix24_box = document.querySelector(".users-100-bitrix24-box"),
    users_250_bitrix24_box = document.querySelector(".users-250-bitrix24-box"),
    users_500_bitrix24_box = document.querySelector(".users-500-bitrix24-box"),
    change_price_bitrix24_box = document.querySelector(".change-price-bitrix24-box")

users_50_bitrix24_box.addEventListener("click", function() {
    users_50_bitrix24_box.style.border = '2px solid #30d5c7'
    users_100_bitrix24_box.style.border = 'none'
    users_250_bitrix24_box.style.border = 'none'
    users_500_bitrix24_box.style.border = 'none'
    change_price_bitrix24_box.textContent = '159 000 ₽'
})

users_100_bitrix24_box.addEventListener("click", function() {
    users_50_bitrix24_box.style.border = 'none'
    users_100_bitrix24_box.style.border = '2px solid #30d5c7'
    users_250_bitrix24_box.style.border = 'none'
    users_500_bitrix24_box.style.border = 'none'
    change_price_bitrix24_box.textContent = '229 000 ₽'
})

users_250_bitrix24_box.addEventListener("click", function() {
    users_50_bitrix24_box.style.border = 'none'
    users_100_bitrix24_box.style.border = 'none'
    users_250_bitrix24_box.style.border = '2px solid #30d5c7'
    users_500_bitrix24_box.style.border = 'none'
    change_price_bitrix24_box.textContent = '349 000 ₽'
})

users_500_bitrix24_box.addEventListener("click", function() {
    users_50_bitrix24_box.style.border = 'none'
    users_100_bitrix24_box.style.border = 'none'
    users_250_bitrix24_box.style.border = 'none'
    users_500_bitrix24_box.style.border = '2px solid #30d5c7'
    change_price_bitrix24_box.textContent = '599 000 ₽'
})