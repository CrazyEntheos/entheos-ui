import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [ { 
                product_id: 1, 
                product_name: 'Peter England', 
                prod_desc: 'Wester Wear Casual', 
                prod_price: 999, 
                prod_size: 'M' 
            },
        ];
        return { products };
    }
}