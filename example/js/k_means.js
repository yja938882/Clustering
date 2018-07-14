(function(root){
	var k
    , data
    , clusters
    , attr_sz;

    /** Constructor
     * @param {Object} args
     */
    function K_Means(args) {
        k = args.k;
        data = args.data;
        init(args);
	}

    /**
     * @param {Object} args
     */
    function init(args){

        clusters = [];

        for(var i = 0, len = data.length; i < len; i++){
            attr_sz = data[i].length;
            data[i].cluster = -1;
        }
    
        for(var i = 0, dsz = data.length; i < k; ){
            var _i = ((Math.random() * (dsz - 1)) | 0);
            if(data[_i].cluster !== -1){
                continue;
            }
            clusters[i] = data[_i];
            clusters[i].id = i;
            data[_i].cluster = (i++);
        }
    }

    /**
     * @breif 각 포인트들을 가장 가까운 클러스터에 할당.
     * @param {Function} distfunc 두 포인트 간의 거리 계산을 위한 fucntion.
     * @param {Function} callback 할당 후 호출.
     */
    K_Means.prototype.setNearestCluster = function(distfunc, callback){

        var end = true;
        for(var i = 0, len = data.length; i < len; i++){
            for(var j = 0; j < k; j++){
                if(data[i].cluster === -1 || 
                    distfunc( data[i], clusters[j] ) < distfunc( data[i], clusters[ data[i].cluster ])){
                    data[i].cluster = j;
                    end = false;
                }
            }
        }
        if( typeof callback == "function" ){
            callback( data, clusters );
        }
        return end;
    }

    /**
     * @breif 각 클러스터의 Centroid 재 설정.
     * @param {Function} callback 설정 후 호출.  
     */
    K_Means.prototype.updateCentroid = function (callback){
     
        var centroids = [],
            cnt = [];
        for(var i = 0, len = data.length; i < len; i++){
            if( !centroids[ data[i].cluster ] ){
                centroids[ data[i].cluster ] = [];
                cnt[ data[i].cluster ] = 0;
            }
            for(var a = 0; a < attr_sz; a++){
                if( !centroids[ data[i].cluster ][a] ){
                    centroids[ data[i].cluster  ][a] = 0;
                }
                centroids[ data[i].cluster ][a] += data[i][a];
            }
            cnt[ data[i].cluster ] ++;
        }
        for(var i = 0; i < k; i++){
            for(var a = 0; a < attr_sz; a++){
                centroids[i][a] /= cnt[i];
            }
            clusters[i] = centroids[i];
            clusters[i].id = i;
        }

        if( typeof callback == "function" )
            callback( data, clusters );
    }

    /**
     * @breif 클러스터링.
     */
	K_Means.prototype.clustering = function(distfunc, callback1, callback2, callback3) {
        while( !set_nearest_cluster(distfunc, callback1) ){
            updateCentroid(callback2);
        }
        if( typeof callback3 == "function" )
            callback3(data ,clusters);
	};

    K_Means.prototype.euclidean = function(a, b){
        var d = [],
            ret = 0;
        for(var i = 0, len = a.length; i < len; i++){
            d[i] = (a[i] - b[i]);
        }
        for(var i = 0, len = a.length; i < len; i++){
            ret += (d[i] * d[i]);
        }
        return Math.sqrt(ret);
    }


    K_Means.prototype.manhattan = function(a, b){
        var d = [],
            ret = 0;
        for(var i = 0, len = a.length; i < len; i++){
            d[i] = (a[i] - b[i]);
        }
        for(var i = 0, len = a.length; i < len; i++){
            ret += (d[i]);
        }
        return ret;
    }

	if (typeof exports !== 'undefined') {
    	if (typeof module !== 'undefined' && module.exports) {
      	exports = module.exports = K_Means;
    }
    exports.K_Means = K_Means;
  	} else if (typeof define === 'function' && define.amd) {
    	define([], function() {
     	return K_Means;
    });
  	} else {
    	root.K_Means = K_Means;
  	}

 })(this);
	