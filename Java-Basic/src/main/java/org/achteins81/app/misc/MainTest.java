package org.achteins81.app.misc;

import java.util.Arrays;
import java.util.List;

/**
 * @author Achteins-81
 * @since 2024-02-07
 */
public class MainTest {
    public static void main(String[] args) {
        String fruitStr = "apple,pear,banana,orange";
        String[] fruits = fruitStr.split(",");
        List<String> fruitList = Arrays.asList(fruits);
//        fruitList.add("beach");
        boolean res = fruitList.contains("apple");
        System.out.println(res);
    }
}
