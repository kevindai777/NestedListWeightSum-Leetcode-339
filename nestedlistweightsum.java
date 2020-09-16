//Java Solution

class Solution {
    public int depthSum(List<NestedInteger> nestedList) {
        return dfs(nestedList, 1);
    }
    
    public int dfs(List<NestedInteger> nestedList, int depth) {
        int sum = 0;
        
        for (NestedInteger element : nestedList) {
            if (element.isInteger()) {
                sum += element.getInteger() * depth;
            } else {
                sum += dfs(element.getList(), depth + 1);
            }
        }
        
        return sum;
    }
}