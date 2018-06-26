# K-Means 
example1             |  example2
:-------------------------:|:-------------------------:
![](https://github.com/yja938882/DSJS/blob/master/k_means/example1.png)  |  ![](https://github.com/yja938882/DSJS/blob/master/k_means/example2.png)

### With d3.js
LOAD
> ```javascript
> <script type="text/javascript" src="/* path */d3.min.js"></script>
> <script type="text/javascript" src="/* path */k_means.js"></script>
DataFormat
> ```javascript
> var DATA = [
>     { x: 1, y: 2},
>     { x: 0, y: 3},
>         ...];
>```
Init
> ```javascript
> var k = new K_Means( K, DATA );
> // K : cluster 수.
> // Data : clustering 할 데이터.
> ```
