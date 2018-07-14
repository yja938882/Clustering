K-Means
===  
example1             |  example2
:-------------------------:|:-------------------------:
![](https://github.com/yja938882/DSJS/blob/master/k_means/example/example1.png)  |  ![](https://github.com/yja938882/DSJS/blob/master/k_means/example/example2.png)

https://yja938882.github.io/d3_practice/k_means.html

Load
=== 
> ```javascript
> <script type="text/javascript" src="/* path */k_means.js"></script>
  
DataFormat
=== 
> ```javascript
> var Data = [
>  [0.5, 0.7],
>  [3.6, 0.11],
>  ...
> ];
>```

 
Docs
===
&nbsp;&nbsp; Constructor  

* **K_Means(args)**   

> ```javascript
> var kmeans = K_Means( { k : 3, data : [[0.5], [0.6], ... ] });
> ```
> * ```args``` Object 
>    *  ```k``` Number : 클러스터 갯수
>    *  ```data``` Array : 데이터 포인트 배열.  

&nbsp;&nbsp; Methods 

* **clustering(dist, callback1, callback2, callback3)**

> ```javascript
> kmeans.clustering(kmeans.euclidean, render1, render2, render3);
> ```
> * ```dist``` Function
> * ```callback1``` Function
> * ```callback2``` Function
> * ```callback3``` Function





