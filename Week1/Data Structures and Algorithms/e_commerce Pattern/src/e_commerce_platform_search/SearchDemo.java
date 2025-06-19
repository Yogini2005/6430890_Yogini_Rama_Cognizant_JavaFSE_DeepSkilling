package e_commerce_platform_search;
import java.util.Arrays;
import java.util.Comparator;
public class SearchDemo {
	public static int linearSearch(Product[]products,int targetId) {
		for(int i=0;i<products.length;i++) {
			if(products[i].getProductId()==targetId) {
				return i;
			}
		}
		return -1;
	}
	public static int binarySearch(Product[]products,int targetId) {
		int left=0;
		int right=products.length-1;
		while(left<=right) {
			int mid=left+(right-left)/2;
			int midId=products[mid].getProductId();
			if(midId==targetId) {
				return mid;
			}else if(midId<targetId) {
				left=mid+1;
			}else {
				right=mid-1;
			}
		}
		return -1;
	}

	public static void main(String[] args) {
		Product[]products= {
				new Product(5,"Laptop","Electronics"),
				new Product(2,"Shirt","Clothing"),
				new Product(8,"Book","Education"),
				new Product(1,"Mobile","Electronics"),
				new Product(10,"Shoes","Footwear")
		};
		int targetId=8;
		int linearResult=linearSearch(products,targetId);
		if(linearResult!=-1) {
			System.out.println("Linear Search:Found" + products[linearResult].getProductName());
		}else {
			System.out.println("Linear Search:Product not found.");
		}
		Arrays.sort(products,Comparator.comparingInt(Product::getProductId));
		int binaryResult=binarySearch(products,targetId);
		if(binaryResult!=-1) {
			System.out.println("Binary Search:Found"+products[binaryResult].getProductName());
			
		}else {
			System.out.println("Binary Search:Product not found.");
		}
		

	}

}
