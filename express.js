// 示例数据：产品列表
const products = [
  { id: 1, name: "iPhone", category: "Electronics", price: 999, stock: 10 },
  { id: 2, name: "MacBook", category: "Electronics", price: 1999, stock: 5 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 29, stock: 20 },
  { id: 4, name: "Headphones", category: "Electronics", price: 149, stock: 15 },
  { id: 5, name: "Jeans", category: "Clothing", price: 79, stock: 8 },
];

// 1. 过滤：筛选出电子产品
const electronics = products.filter(product => 
  product.category === "Electronics"
);

// 2. 映射：创建仅包含名称和价格的新数组
const productPrices = products.map(product => ({
  name: product.name,
  price: product.price
}));

// 3. 排序：按价格从高到低排序
const sortedByPrice = [...products].sort((a, b) => 
  b.price - a.price
);

// 4. 聚合：计算所有产品的总库存
const totalStock = products.reduce((sum, product) => 
  sum + product.stock, 0
);

// 5. 查找：找到价格超过1000的第一个产品
const expensiveProduct = products.find(product => 
  product.price > 1000
);

// 6. 组合操作：计算服装类产品的平均价格
const clothing = products.filter(p => p.category === "Clothing");
const avgClothingPrice = clothing.reduce((sum, p) => sum + p.price, 0) / clothing.length;

// 输出结果
console.log("电子产品:", electronics);
console.log("产品价格列表:", productPrices);
console.log("按价格排序:", sortedByPrice);
console.log("总库存:", totalStock);
console.log("高价产品:", expensiveProduct);
console.log("服装平均价格:", avgClothingPrice.toFixed(2));
