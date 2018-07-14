# K-Means 
example1             |  example2
:-------------------------:|:-------------------------:
![](https://github.com/yja938882/DSJS/blob/master/k_means/example/example1.png)  |  ![](https://github.com/yja938882/DSJS/blob/master/k_means/example/example2.png)

https://yja938882.github.io/d3_practice/k_means.html

#### LOAD
> ```javascript
> <script type="text/javascript" src="/* path */d3.min.js"></script>
> <script type="text/javascript" src="/* path */k_means.js"></script>
#### DataFormat
> ```javascript
> var DATA = [
>     { x: 1, y: 2},
>     { x: 0, y: 3},
>         ...];
>```
#### Init
> ```javascript
> var kmeans = new K_Means( K, DATA );
> // K : cluster 수.
> // Data : clustering 할 데이터.
> ```
#### Clusterung at once
> ```javascript
> kmeans.clustering( distfunc );
> // distfunc : 두 포인트 간에 거리 계산함수
> // euclidean_distance
> // manhattan_distance
> //
> // *** Or Custom distdunction ***
> // function custom_dist( a , b ){
> //      ...
> //   return {number};
> // }
> //
> ```
#### Clustering Step by Step
> ```javascript
> //step 1
> var end = k.set_nearest_cluster( euclidean_distance, render );
>
> //step 2
> k.update_centroid( render );
>
> //last step
> if( end ) render();
> ```
