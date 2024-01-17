def treeHeightUtil(root):
    if root is None:
        return 0
    fromRight=treeHeightUtil(root.right)
    fromLeft=treeHeightUtil(root.left)
    return 1+max(fromLeft,fromRight) 
def height(root):
    return max(treeHeightUtil(root.right),treeHeightUtil(root.left))
