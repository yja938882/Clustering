# K-Means 
## Example
> ![example](https://github.com/yja938882/DSJS/blob/master/k_means/example.png)  
> https://yja938882.github.io/d3_practice/k_means.html

### With d3.js
LOAD
> ```javascript
> <script type="text/javascript" src="/* path */d3.min.js"></script>
> <script type="text/javascript" src="/* path */k_means.js"></script>
> ```
CSS
> ```css
> #board{
>   width: 600px;
>   height: 600px;
>   float: left;
>   border-width: 2px;
>   border-style: solid;
>  }
> #step{
>  width: 80px;
>  height: 40px;
>  margin-left: 10px;
>  }
>```
HTML
> ```html
> <h2> K-Means Clustering with d3.js </h2>	
> <div id="board">		
> </div>
> <button id="step" onclick ="step()"> step </button>
> ```
JavaScript
> ```javascript
> function getColor( c ){
>   switch( c ){
>     case 0 : return 'black';
>     case 1 : return 'blue';
>     case 2 : return 'red';
>     case 3 : return 'green';
>   }
> }
> 
> /* 임의 의 데이터 set 생성 */ 
> var rd = generateRandomPoints( 10, 580, 10, 580, 1000 );
> var svg = d3.select('#board').append('svg')
>   .attr('width','600').attr('height','600').append('g');
> 
> var k = new K_Means(4,rd);
> 
> /* update 된 point 와 cluster 정보를 render */
> function render( dots , clusters ){
>   svg.selectAll('g').remove();
>   var g = svg.append('g');
>   g.selectAll('.dot')
>   .data( dots )
>   .enter().append('circle')
>   .attr('class','dot')
>   .attr('r',3)
>   .attr('cx',function(d){ return d.x; })
>   .attr('cy',function(d){ return d.y; })
>   .attr('id',function(d){ return d.cluster_id; })
>   .style('fill',function(d){
>     return getColor( d.cluster_id );
>   });
>
>   g.selectAll('.dotc')
>     .data( clusters )
>     .enter().append('circle')
>     .attr('class','dotc')
>     .attr('r',10)
>     .attr('cx',function(d){ return d.x; })
>     .attr('cy',function(d){ return d.y; })
>     .style('fill',function(d){
>       return getColor( d.id );
>     });
> }
> 
> /* K-Means Clustering 을 단계별로 보기위한 함수 */
> var s = 0;
> function step(){
>   if( s % 2 ==0)
>     k.set_nearest_cluster( render ); // 각 점들을 가장 가까운 cluster 에 할당
>   else
>     k.update_centroid(render); // 각 cluster 들의 Centetoid 를 
>   s++;
> }
>
> var g = svg.append('g');
> g.selectAll('.dot')
> .data( rd )
> .enter().append('circle')
> .attr('class','dot')
> .attr('r',3)
> .attr('cx',function(d){ return d.x; })
> .attr('cy',function(d){ return d.y; })
> .attr('id',function(d){ return d.cluster_id; })
>   .style('fill',function(d){
>   return 'black' ;
> });
> ```
