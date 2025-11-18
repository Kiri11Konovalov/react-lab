import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(
        initialProducts
    );

    function handleIncreaseClick(productId: number) {
        setProducts(
            products.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product.count + 1,
                    };
                } else {
                    return product;
                }
            })
        );
    }

    function handleDecreaseClick(productId: number) {
        // Обновляем продукт с указанным id, уменьшая его количество на 1
        // Если количество становится 0, удаляем продукт из корзины
        setProducts(products.map(product => {
            if (product.id === productId) {
                if (product.count > 1) {
                    return { ...product, count: product.count - 1 };
                } else {
                    // Удаляем продукт, если его количество становится 0
                    return null;
                }
            }
            return product;
        }).filter(Boolean) as any); // Фильтруем null значения
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            handleDecreaseClick(product.id);
                        }}
                    >
                        –
                    </button>
                </li>
            ))}
        </ul>
    );
}