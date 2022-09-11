export default class ProductService {

    getProductsSmall() {
		return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
	}
	getUsers() {
		return fetch('data/users.json').then(res => res.json()).then(d => d.data);
	}
	getRegions() {
		return fetch('data/regions.json').then(res => res.json()).then(d => d.data);
	}
	getProducts() {
		return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }
	getSetting() {
		return fetch('data/setting.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
	
}