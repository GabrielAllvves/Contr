document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

function addProduct() {
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;

    if (product && quantity) {
        var inventory = getInventory();
        inventory.push({ product: product, quantity: quantity });
        saveInventory(inventory);
        displayInventory();
        clearInputFields();
    }
}

function displayInventory() {
    var inventory = getInventory();
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    inventory.forEach(function (item, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.product} - ${item.quantity}</span>
                              <button onclick="removeProduct(${index})">Remover</button>`;
        productList.appendChild(listItem);
    });
}

function removeProduct(index) {
    var inventory = getInventory();
    inventory.splice(index, 1);
    saveInventory(inventory);
    displayInventory();
}

function getInventory() {
    return JSON.parse(localStorage.getItem('inventory')) || [];
}

function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function clearInputFields() {
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
}

// Para diminuir a quantidade de unidade

document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

function addProduct() {
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;

    if (product && quantity) {
        var inventory = getInventory();
        var existingProductIndex = findProductIndex(product);

        if (existingProductIndex !== -1) {
            // Produto já existe, atualiza a quantidade
            inventory[existingProductIndex].quantity += parseInt(quantity);
        } else {
            // Produto não existe, adiciona à lista
            inventory.push({ product: product, quantity: parseInt(quantity) });
        }

        saveInventory(inventory);
        displayInventory();
        clearInputFields();
    }
}

function removeProduct(index) {
    var inventory = getInventory();
    inventory.splice(index, 1);
    saveInventory(inventory);
    displayInventory();
}

function decreaseQuantity(index) {
    var inventory = getInventory();
    
    if (inventory[index].quantity > 1) {
        inventory[index].quantity--;
        saveInventory(inventory);
        displayInventory();
    } else {
        removeProduct(index);
    }
}

function findProductIndex(productName) {
    var inventory = getInventory();

    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].product.toLowerCase() === productName.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function displayInventory() {
    var inventory = getInventory();
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    inventory.forEach(function (item, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.product} - ${item.quantity}</span>
                              <button onclick="decreaseQuantity(${index})">-</button>
                              <button onclick="removeProduct(${index})">Remover</button>`;
        productList.appendChild(listItem);
    });
}

function getInventory() {
    return JSON.parse(localStorage.getItem('inventory')) || [];
}

function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function clearInputFields() {
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
}





// Atualização 3 
document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

function addProduct() {
    var productName = document.getElementById('productName').value;
    var unitValue = formatCurrency(document.getElementById('unitValue').value);
    var totalQuantity = document.getElementById('totalQuantity').value;
    var brandName = document.getElementById('brandName').value;

    if (productName && unitValue && totalQuantity && brandName) {
        var inventory = getInventory();
        var existingProductIndex = findProductIndex(productName);

        if (existingProductIndex !== -1) {
            // Produto já existe, atualiza os detalhes
            inventory[existingProductIndex] = {
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: parseInt(inventory[existingProductIndex].quantity) + parseInt(totalQuantity)
            };
        } else {
            // Produto não existe, adiciona à lista
            inventory.push({
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: totalQuantity
            });
        }

        saveInventory(inventory);
        displayInventory();
        clearInputFields();
    }
}

function showProductDetails(index) {
    var inventory = getInventory();
    var productDetails = document.getElementById('productDetails');
    var product = inventory[index];

    productDetails.innerHTML = `
        <p><strong>Nome do Produto:</strong> ${product.productName}</p>
        <p><strong>Marca:</strong> ${product.brandName}</p>
        <p><strong>Valor da Unidade:</strong> ${product.unitValue}</p>
        <p><strong>Quantidade Total:</strong> ${product.totalQuantity}</p>
    `;
}

function removeProduct(index) {
    var inventory = getInventory();
    inventory.splice(index, 1);
    saveInventory(inventory);
    displayInventory();
}

function decreaseQuantity(index) {
    var inventory = getInventory();
    
    if (inventory[index].quantity > 1) {
        inventory[index].quantity--;
        saveInventory(inventory);
        displayInventory();
    } else {
        removeProduct(index);
    }
}

function findProductIndex(productName) {
    var inventory = getInventory();

    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].productName.toLowerCase() === productName.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function formatCurrency(value) {
    // Formata o valor para o formato de moeda (BRL)
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function displayInventory() {
    var inventory = getInventory();
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    inventory.forEach(function (item, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.brandName} - ${item.productName} - ${item.quantity}</span>
                              <button onclick="decreaseQuantity(${index})">-</button>
                              <button onclick="showProductDetails(${index})">Detalhes</button>
                              <button onclick="removeProduct(${index})">Remover</button>`;
        productList.appendChild(listItem);
    });
}

function getInventory() {
    return JSON.parse(localStorage.getItem('inventory')) || [];
}

function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function clearInputFields() {
    document.getElementById('productName').value = '';
    document.getElementById('unitValue').value = '';
    document.getElementById('totalQuantity').value = '';
    document.getElementById('brandName').value = '';
    document.getElementById('productDetails').innerHTML = '';
}

// Atualização 
document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

function addProduct() {
    var productName = document.getElementById('productName').value;
    var unitValue = formatCurrency(document.getElementById('unitValue').value);
    var totalQuantity = document.getElementById('totalQuantity').value;
    var brandName = document.getElementById('brandName').value;

    if (productName && unitValue && totalQuantity && brandName) {
        var inventory = getInventory();
        var existingProductIndex = findProductIndex(productName);

        if (existingProductIndex !== -1) {
            // Produto já existe, atualiza os detalhes
            inventory[existingProductIndex] = {
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: parseInt(inventory[existingProductIndex].quantity) + parseInt(totalQuantity)
            };
        } else {
            // Produto não existe, adiciona à lista
            inventory.push({
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: totalQuantity
            });
        }

        saveInventory(inventory);
        displayInventory();
        clearInputFields();
    }
}

function showProductDetails(index) {
    var inventory = getInventory();
    var productDetails = document.getElementById('productDetails');
    var product = inventory[index];

    var totalValue = formatCurrency(product.unitValue * product.totalQuantity);

    productDetails.innerHTML = `
        <p><strong>Nome do Produto:</strong> ${product.productName}</p>
        <p><strong>Marca:</strong> ${product.brandName}</p>
        <p><strong>Valor da Unidade:</strong> ${product.unitValue}</p>
        <p><strong>Quantidade Total:</strong> ${product.totalQuantity}</p>
        <p><strong>Valor Total:</strong> ${totalValue}</p>
    `;
}

function removeProduct(index) {
    var inventory = getInventory();
    inventory.splice(index, 1);
    saveInventory(inventory);
    displayInventory();
}

function decreaseQuantity(index) {
    var inventory = getInventory();
    
    if (inventory[index].quantity > 1) {
        inventory[index].quantity--;
        saveInventory(inventory);
        displayInventory();
    } else {
        removeProduct(index);
    }
}

function findProductIndex(productName) {
    var inventory = getInventory();

    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].productName.toLowerCase() === productName.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function formatCurrency(value) {
    // Formata o valor para o formato de moeda (BRL)
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function displayInventory() {
    var inventory = getInventory();
    var productList = document.getElementById('productList');
    productList.innerHTML = '';

    inventory.forEach(function (item, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.brandName} - ${item.productName} - ${item.quantity}</span>
                              <button onclick="decreaseQuantity(${index})">-</button>
                              <button onclick="showProductDetails(${index})">Detalhes</button>
                              <button onclick="removeProduct(${index})">Remover</button>`;
        productList.appendChild(listItem);
    });
}

function getInventory() {
    return JSON.parse(localStorage.getItem('inventory')) || [];
}

function saveInventory(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function clearInputFields() {
    document.getElementById('productName').value = '';
    document.getElementById('unitValue').value = '';
    document.getElementById('totalQuantity').value = '';
    document.getElementById('brandName').value = '';
    document.getElementById('productDetails').innerHTML = '';
}
// Atualização 
// ... (código anterior)

function initCleave() {
    // Inicializa o plugin Cleave.js para formatar o campo de valor da unidade
    var cleave = new Cleave('#unitValue', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });
}

// ... (código anterior)
document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

function addProduct() {
    var productName = document.getElementById('productName').value;
    var unitValue = document.getElementById('unitValue').value.replace(/[^\d]/g, ''); // Remover não dígitos
    var totalQuantity = document.getElementById('totalQuantity').value;
    var brandName = document.getElementById('brandName').value;

    if (productName && unitValue && totalQuantity && brandName) {
        unitValue = (parseFloat(unitValue) / 100).toFixed(2); // Converter centavos para reais
        var inventory = getInventory();
        var existingProductIndex = findProductIndex(productName);

        if (existingProductIndex !== -1) {
            // Produto já existe, atualiza os detalhes
            inventory[existingProductIndex] = {
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: parseInt(inventory[existingProductIndex].quantity) + parseInt(totalQuantity)
            };
        } else {
            // Produto não existe, adiciona à lista
            inventory.push({
                productName: productName,
                unitValue: unitValue,
                totalQuantity: totalQuantity,
                brandName: brandName,
                quantity: totalQuantity
            });
        }

        saveInventory(inventory);
        displayInventory();
        clearInputFields();
    }
}

function showProductDetails(index) {
    var inventory = getInventory();
    var productDetails = document.getElementById('productDetails');
    var product = inventory[index];

    var totalValue = formatCurrency(product.unitValue * product.totalQuantity);

    productDetails.innerHTML = `
        <p><strong>Nome do Produto:</strong> ${product.productName}</p>
        <p><strong>Marca:</strong> ${product.brandName}</p>
        <p><strong>Valor da Unidade:</strong> ${formatCurrency(product.unitValue)}</p>
        <p><strong>Quantidade Total:</strong> ${product.totalQuantity}</p>
        <p><strong>Valor Total:</strong> ${totalValue}</p>
    `;
}

// botão de atualização 

document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
});

// ... (restante do código)

function updateProducts() {
    var inventory = getInventory();
    
    // Recalcula o valor total dos produtos
    inventory.forEach(function (product) {
        product.quantity = parseInt(product.totalQuantity);
    });

    saveInventory(inventory);
    displayInventory();
}
// Atualização do Total 

document.addEventListener('DOMContentLoaded', function () {
    displayInventory();
    updateTotal();
});

// ... (restante do código)

function updateProducts() {
    var inventory = getInventory();
    
    // Recalcula o valor total dos produtos
    inventory.forEach(function (product) {
        product.quantity = parseInt(product.totalQuantity);
    });

    saveInventory(inventory);
    displayInventory();
    updateTotal();
}

function updateTotal() {
    var inventory = getInventory();
    var totalValue = inventory.reduce(function (total, product) {
        return total + (parseFloat(product.unitValue) * parseInt(product.totalQuantity));
    }, 0);

    document.getElementById('totalValue').innerText = 'R$ ' + totalValue.toFixed(2);
}

function updateProductDetails() {
    var inventory = getInventory();
    var productDetails = document.getElementById('productDetails');
    
    // Obtém o índice do produto selecionado na lista de detalhes
    var selectedProductIndex = parseInt(productDetails.dataset.index);

    // Atualiza os detalhes do produto
    if (!isNaN(selectedProductIndex) && selectedProductIndex >= 0 && selectedProductIndex < inventory.length) {
        var product = inventory[selectedProductIndex];

        var totalValue = formatCurrency(product.unitValue * product.totalQuantity);

        productDetails.innerHTML = `
            <p><strong>Nome do Produto:</strong> ${product.productName}</p>
            <p><strong>Marca:</strong> ${product.brandName}</p>
            <p><strong>Valor da Unidade:</strong> ${formatCurrency(product.unitValue)}</p>
            <p><strong>Quantidade Total:</strong> ${product.totalQuantity}</p>
            <p><strong>Valor Total:</strong> ${totalValue}</p>
        `;
    }
}

// ... (restante do código)
