import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [ { 
                product_id: 1,
                product_img: 'http://www.planetayurveda.com/media/catalog/product/i/m/image-not-available-store.png',
                product_name: 'Peter England', 
                product_desc: 'Wester Wear Casual', 
                product_price: 999, 
                product_size: 'M' 
            },
        ];
        return { products };
    }
}