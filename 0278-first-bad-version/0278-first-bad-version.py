# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

# class Solution(object):
#     def firstBadVersion(self, n):
#         """
#         :type n: int
#         :rtype: int
#         """
#         if isBadVersion(1) == True:
#             return 1
        
# #       iterate through the list of versions backwards
#         for version in range(n, 0, -1):
            
# #           make an api call for current version in the loop
#             isBad = isBadVersion(version)
# #           if 
#             if isBad == False:
#                 return version + 1
        
        
# #         Binary search
    
    
class Solution(object):
    def firstBadVersion(self, n):
#         Binary search 
#         set left and right pointers at 1 and n (edge case of only one version)
        left, right = 2, n
#         use while loop to continue searching until left > right
        if isBadVersion(1) == True:
            return 1
        while left <= right:
#            make API call for middle version
            mid = floor((right+ left) / 2)
#            if middle version is good - move left the pointer to middle version + 1    
            isBad = isBadVersion(mid)
            prevBad = isBadVersion(mid - 1)
            
            if isBad == True and prevBad == False:
                return int(mid)
            
            if isBad == False:
                left = mid + 1
#            else repeat logic to right
            else: 
                right = mid - 1
            
