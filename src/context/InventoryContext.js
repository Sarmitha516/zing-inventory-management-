import { createContext, useContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const InventoryContext = createContext(null);
const InventoryDispatchContext = createContext(null);

export const InventoryProvider = ({ children }) => {
    const [inventoryInLS, setInventoryInLS] = useLocalStorage(
        "inventory_v3_new",
        initialInventory
    );

    const [inventory, dispatch] = useReducer(
        inventoryReducer,
        inventoryInLS
    );

    useEffect(() => {
        setInventoryInLS(inventory);
    }, [inventory]);

    return (
        <InventoryContext.Provider value={inventory}>
            <InventoryDispatchContext.Provider value={dispatch}>
                {children}
            </InventoryDispatchContext.Provider>
        </InventoryContext.Provider>
    );
};

export const useInventory = () => {
    return useContext(InventoryContext);
};

export const useInventoryDispatch = () => {
    return useContext(InventoryDispatchContext);
};

const inventoryReducer = (state, action) => {
    switch (action.type) {

        case "NEW_PRODUCT":
            return [
                ...state,
                {
                    productName: action.productName,
                    imageUrl: action.imageUrl,
                    price: action.price,
                    tags: action.tags,
                    stock: parseInt(action.stock),
                },
            ];

        case "STOCK_ADDED":
            return state.map((product) =>
                product.productName === action.productName
                    ? {
                          ...product,
                          stock:
                              parseInt(product.stock) +
                              parseInt(action.stock),
                      }
                    : product
            );

        case "STOCK_SOLD":
            return state.map((product) =>
                product.productName === action.productName
                    ? {
                          ...product,
                          stock: Math.max(
                              0,
                              parseInt(product.stock) -
                                  parseInt(action.stock)
                          ),
                      }
                    : product
            );

        case "REMOVE_PRODUCT":
            return state.filter(
                (product) =>
                    product.productName !== action.productName
            );

        default:
            console.log("Unknown action type:", action.type);
            return state;
    }
};

const initialInventory = [

    // 1. Milk
    {
        productName: "Milk",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40114416_8-amul-taaza-milk.jpg",
        price: 30,
        tags: ["dairy", "milk"],
        stock: 11,
    },

    // 2. Cheese
    {
        productName: "Cheese",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40003788_4-amul-processed-cheese-block.jpg",
        price: 120,
        tags: ["dairy", "cheese"],
        stock: 8,
    },

    // 3. Biscuit
    {
        productName: "Biscuit",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/102102_4-parle-gluco-biscuits-parle-g.jpg",
        price: 40,
        tags: ["snacks", "biscuit"],
        stock: 14,
    },

    // 4. Eggs
    {
        productName: "Eggs",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40072320_8-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
        price: 70,
        tags: ["food", "eggs"],
        stock: 11,
    },

    // 5. Juice
    {
        productName: "Juice",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40190763_8-real-fruit-power-juice-mixed-fruit.jpg",
        price: 60,
        tags: ["drink", "juice"],
        stock: 10,
    },

    // 6. Chocolate
    {
        productName: "Chocolate",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/281026_23-cadbury-dairy-milk-chocolate.jpg",
        price: 50,
        tags: ["snacks", "chocolate"],
        stock: 19,
    },

    // 7. Bread
    {
        productName: "Bread",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40162924_7-britannia-100-whole-wheat-bread.jpg",
        price: 45,
        tags: ["food", "bread"],
        stock: 12,
    },

    // 8. Potato Chips
    {
        productName: "Potato Chips",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/102741_21-lays-potato-chips-simple-classic-salted.jpg",
        price: 40,
        tags: ["snacks", "chips"],
        stock: 24,
    },

    // 9. Paneer
    {
        productName: "Paneer",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40096747_8-amul-malai-fresh-paneer.jpg",
        price: 90,
        tags: ["dairy", "paneer"],
        stock: 15,
    },

    // 10. Butter
    {
        productName: "Butter",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/104864_8-amul-butter-pasteurised.jpg",
        price: 60,
        tags: ["dairy", "butter"],
        stock: 20,
    },

    // 11. Maggi
    {
        productName: "Maggi",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40083698_9-maggi-masala-noodles-no-onion-garlic.jpg",
        price: 15,
        tags: ["food", "noodles"],
        stock: 30,
    },

    // 12. Vim Soap
    {
        productName: "Vim Soap",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/266967_13-vim-dishwash-liquid-gel-lemon.jpg",
        price: 25,
        tags: ["cleaning", "soap"],
        stock: 20,
    },

    // 13. Tata Salt
    {
        productName: "Tata Salt",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40017970_7-tata-salt-iodised-crystal-salt.jpg",
        price: 30,
        tags: ["food", "salt"],
        stock: 25,
    },

    // 14. Fortune Oil
    {
        productName: "Fortune Oil",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/40180049_5-fortune-sunlite-refined-sunflower-oil.jpg",
        price: 150,
        tags: ["food", "oil"],
        stock: 20,
    },

    // 15. Aashirvaad Atta
    {
        productName: "Aashirvaad Atta",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/30006887_9-aashirvaad-atta-whole-wheat.jpg",
        price: 250,
        tags: ["food", "atta"],
        stock: 15,
    },

    // 16. Rice
    {
        productName: "Rice",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/243336_7-india-gate-basmati-rice-classic.jpg",
        price: 80,
        tags: ["food", "rice"],
        stock: 20,
    },

    // 17. Sugar
    {
        productName: "Sugar",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/10000447_17-bb-royal-refined-sugar-sulphurless.jpg",
        price: 45,
        tags: ["food", "sugar"],
        stock: 25,
    },

    // 18. Toor Dal
    {
        productName: "Toor Dal",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/10000428_18-bb-popular-toorarhar-dal.jpg",
        price: 160,
        tags: ["food", "dal"],
        stock: 15,
    },

    // 19. Tomato Ketchup
    {
        productName: "Tomato Ketchup",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/152450_16-kissan-fresh-tomato-ketchup.jpg",
        price: 120,
        tags: ["food", "ketchup"],
        stock: 15,
    },

    // 20. Tea Powder
    {
        productName: "Tea Powder",
        imageUrl:
            "https://www.bbassets.com/media/uploads/p/s/263642_23-tata-tea-gold-tea.jpg",
        price: 180,
        tags: ["drink", "tea"],
        stock: 20,
    },
];

export default InventoryContext;