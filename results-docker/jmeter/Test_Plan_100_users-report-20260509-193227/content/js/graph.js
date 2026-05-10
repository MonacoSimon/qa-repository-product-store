/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 548.0, "minX": 0.0, "maxY": 86885.0, "series": [{"data": [[0.0, 548.0], [0.1, 548.0], [0.2, 548.0], [0.3, 548.0], [0.4, 548.0], [0.5, 573.0], [0.6, 573.0], [0.7, 573.0], [0.8, 573.0], [0.9, 573.0], [1.0, 582.0], [1.1, 582.0], [1.2, 582.0], [1.3, 582.0], [1.4, 582.0], [1.5, 621.0], [1.6, 621.0], [1.7, 621.0], [1.8, 621.0], [1.9, 621.0], [2.0, 621.0], [2.1, 621.0], [2.2, 621.0], [2.3, 621.0], [2.4, 621.0], [2.5, 774.0], [2.6, 774.0], [2.7, 774.0], [2.8, 774.0], [2.9, 774.0], [3.0, 968.0], [3.1, 968.0], [3.2, 968.0], [3.3, 968.0], [3.4, 968.0], [3.5, 1143.0], [3.6, 1143.0], [3.7, 1143.0], [3.8, 1143.0], [3.9, 1143.0], [4.0, 1202.0], [4.1, 1202.0], [4.2, 1202.0], [4.3, 1202.0], [4.4, 1202.0], [4.5, 1298.0], [4.6, 1298.0], [4.7, 1298.0], [4.8, 1298.0], [4.9, 1298.0], [5.0, 1385.0], [5.1, 1385.0], [5.2, 1385.0], [5.3, 1385.0], [5.4, 1385.0], [5.5, 1518.0], [5.6, 1518.0], [5.7, 1518.0], [5.8, 1518.0], [5.9, 1518.0], [6.0, 1520.0], [6.1, 1520.0], [6.2, 1520.0], [6.3, 1520.0], [6.4, 1520.0], [6.5, 1528.0], [6.6, 1528.0], [6.7, 1528.0], [6.8, 1528.0], [6.9, 1528.0], [7.0, 1549.0], [7.1, 1549.0], [7.2, 1549.0], [7.3, 1549.0], [7.4, 1549.0], [7.5, 1583.0], [7.6, 1583.0], [7.7, 1583.0], [7.8, 1583.0], [7.9, 1583.0], [8.0, 1613.0], [8.1, 1613.0], [8.2, 1613.0], [8.3, 1613.0], [8.4, 1613.0], [8.5, 1753.0], [8.6, 1753.0], [8.7, 1753.0], [8.8, 1753.0], [8.9, 1753.0], [9.0, 1774.0], [9.1, 1774.0], [9.2, 1774.0], [9.3, 1774.0], [9.4, 1774.0], [9.5, 1806.0], [9.6, 1806.0], [9.7, 1806.0], [9.8, 1806.0], [9.9, 1806.0], [10.0, 1891.0], [10.1, 1891.0], [10.2, 1891.0], [10.3, 1891.0], [10.4, 1891.0], [10.5, 1903.0], [10.6, 1903.0], [10.7, 1903.0], [10.8, 1903.0], [10.9, 1903.0], [11.0, 1981.0], [11.1, 1981.0], [11.2, 1981.0], [11.3, 1981.0], [11.4, 1981.0], [11.5, 1989.0], [11.6, 1989.0], [11.7, 1989.0], [11.8, 1989.0], [11.9, 1989.0], [12.0, 2007.0], [12.1, 2007.0], [12.2, 2007.0], [12.3, 2007.0], [12.4, 2007.0], [12.5, 2081.0], [12.6, 2081.0], [12.7, 2081.0], [12.8, 2081.0], [12.9, 2081.0], [13.0, 2182.0], [13.1, 2182.0], [13.2, 2182.0], [13.3, 2182.0], [13.4, 2182.0], [13.5, 2183.0], [13.6, 2183.0], [13.7, 2183.0], [13.8, 2183.0], [13.9, 2183.0], [14.0, 2210.0], [14.1, 2210.0], [14.2, 2210.0], [14.3, 2210.0], [14.4, 2210.0], [14.5, 2250.0], [14.6, 2250.0], [14.7, 2250.0], [14.8, 2250.0], [14.9, 2250.0], [15.0, 2294.0], [15.1, 2294.0], [15.2, 2294.0], [15.3, 2294.0], [15.4, 2294.0], [15.5, 2319.0], [15.6, 2319.0], [15.7, 2319.0], [15.8, 2319.0], [15.9, 2319.0], [16.0, 2433.0], [16.1, 2433.0], [16.2, 2433.0], [16.3, 2433.0], [16.4, 2433.0], [16.5, 2454.0], [16.6, 2454.0], [16.7, 2454.0], [16.8, 2454.0], [16.9, 2454.0], [17.0, 2477.0], [17.1, 2477.0], [17.2, 2477.0], [17.3, 2477.0], [17.4, 2477.0], [17.5, 2503.0], [17.6, 2503.0], [17.7, 2503.0], [17.8, 2503.0], [17.9, 2503.0], [18.0, 2511.0], [18.1, 2511.0], [18.2, 2511.0], [18.3, 2511.0], [18.4, 2511.0], [18.5, 2522.0], [18.6, 2522.0], [18.7, 2522.0], [18.8, 2522.0], [18.9, 2522.0], [19.0, 2611.0], [19.1, 2611.0], [19.2, 2611.0], [19.3, 2611.0], [19.4, 2611.0], [19.5, 2618.0], [19.6, 2618.0], [19.7, 2618.0], [19.8, 2618.0], [19.9, 2618.0], [20.0, 2645.0], [20.1, 2645.0], [20.2, 2645.0], [20.3, 2645.0], [20.4, 2645.0], [20.5, 2732.0], [20.6, 2732.0], [20.7, 2732.0], [20.8, 2732.0], [20.9, 2732.0], [21.0, 2742.0], [21.1, 2742.0], [21.2, 2742.0], [21.3, 2742.0], [21.4, 2742.0], [21.5, 2817.0], [21.6, 2817.0], [21.7, 2817.0], [21.8, 2817.0], [21.9, 2817.0], [22.0, 2952.0], [22.1, 2952.0], [22.2, 2952.0], [22.3, 2952.0], [22.4, 2952.0], [22.5, 2970.0], [22.6, 2970.0], [22.7, 2970.0], [22.8, 2970.0], [22.9, 2970.0], [23.0, 3003.0], [23.1, 3003.0], [23.2, 3003.0], [23.3, 3003.0], [23.4, 3003.0], [23.5, 3011.0], [23.6, 3011.0], [23.7, 3011.0], [23.8, 3011.0], [23.9, 3011.0], [24.0, 3198.0], [24.1, 3198.0], [24.2, 3198.0], [24.3, 3198.0], [24.4, 3198.0], [24.5, 3331.0], [24.6, 3331.0], [24.7, 3331.0], [24.8, 3331.0], [24.9, 3331.0], [25.0, 3331.0], [25.1, 3331.0], [25.2, 3331.0], [25.3, 3331.0], [25.4, 3331.0], [25.5, 3465.0], [25.6, 3465.0], [25.7, 3465.0], [25.8, 3465.0], [25.9, 3465.0], [26.0, 3504.0], [26.1, 3504.0], [26.2, 3504.0], [26.3, 3504.0], [26.4, 3504.0], [26.5, 3638.0], [26.6, 3638.0], [26.7, 3638.0], [26.8, 3638.0], [26.9, 3638.0], [27.0, 3675.0], [27.1, 3675.0], [27.2, 3675.0], [27.3, 3675.0], [27.4, 3675.0], [27.5, 3676.0], [27.6, 3676.0], [27.7, 3676.0], [27.8, 3676.0], [27.9, 3676.0], [28.0, 3718.0], [28.1, 3718.0], [28.2, 3718.0], [28.3, 3718.0], [28.4, 3718.0], [28.5, 3764.0], [28.6, 3764.0], [28.7, 3764.0], [28.8, 3764.0], [28.9, 3764.0], [29.0, 3772.0], [29.1, 3772.0], [29.2, 3772.0], [29.3, 3772.0], [29.4, 3772.0], [29.5, 3799.0], [29.6, 3799.0], [29.7, 3799.0], [29.8, 3799.0], [29.9, 3799.0], [30.0, 3858.0], [30.1, 3858.0], [30.2, 3858.0], [30.3, 3858.0], [30.4, 3858.0], [30.5, 4172.0], [30.6, 4172.0], [30.7, 4172.0], [30.8, 4172.0], [30.9, 4172.0], [31.0, 4188.0], [31.1, 4188.0], [31.2, 4188.0], [31.3, 4188.0], [31.4, 4188.0], [31.5, 4196.0], [31.6, 4196.0], [31.7, 4196.0], [31.8, 4196.0], [31.9, 4196.0], [32.0, 4365.0], [32.1, 4365.0], [32.2, 4365.0], [32.3, 4365.0], [32.4, 4365.0], [32.5, 4372.0], [32.6, 4372.0], [32.7, 4372.0], [32.8, 4372.0], [32.9, 4372.0], [33.0, 4495.0], [33.1, 4495.0], [33.2, 4495.0], [33.3, 4495.0], [33.4, 4495.0], [33.5, 4572.0], [33.6, 4572.0], [33.7, 4572.0], [33.8, 4572.0], [33.9, 4572.0], [34.0, 4649.0], [34.1, 4649.0], [34.2, 4649.0], [34.3, 4649.0], [34.4, 4649.0], [34.5, 4660.0], [34.6, 4660.0], [34.7, 4660.0], [34.8, 4660.0], [34.9, 4660.0], [35.0, 4791.0], [35.1, 4791.0], [35.2, 4791.0], [35.3, 4791.0], [35.4, 4791.0], [35.5, 5022.0], [35.6, 5022.0], [35.7, 5022.0], [35.8, 5022.0], [35.9, 5022.0], [36.0, 5113.0], [36.1, 5113.0], [36.2, 5113.0], [36.3, 5113.0], [36.4, 5113.0], [36.5, 5465.0], [36.6, 5465.0], [36.7, 5465.0], [36.8, 5465.0], [36.9, 5465.0], [37.0, 5862.0], [37.1, 5862.0], [37.2, 5862.0], [37.3, 5862.0], [37.4, 5862.0], [37.5, 5893.0], [37.6, 5893.0], [37.7, 5893.0], [37.8, 5893.0], [37.9, 5893.0], [38.0, 6150.0], [38.1, 6150.0], [38.2, 6150.0], [38.3, 6150.0], [38.4, 6150.0], [38.5, 6288.0], [38.6, 6288.0], [38.7, 6288.0], [38.8, 6288.0], [38.9, 6288.0], [39.0, 6359.0], [39.1, 6359.0], [39.2, 6359.0], [39.3, 6359.0], [39.4, 6359.0], [39.5, 6483.0], [39.6, 6483.0], [39.7, 6483.0], [39.8, 6483.0], [39.9, 6483.0], [40.0, 6527.0], [40.1, 6527.0], [40.2, 6527.0], [40.3, 6527.0], [40.4, 6527.0], [40.5, 6991.0], [40.6, 6991.0], [40.7, 6991.0], [40.8, 6991.0], [40.9, 6991.0], [41.0, 7041.0], [41.1, 7041.0], [41.2, 7041.0], [41.3, 7041.0], [41.4, 7041.0], [41.5, 7178.0], [41.6, 7178.0], [41.7, 7178.0], [41.8, 7178.0], [41.9, 7178.0], [42.0, 7221.0], [42.1, 7221.0], [42.2, 7221.0], [42.3, 7221.0], [42.4, 7221.0], [42.5, 7276.0], [42.6, 7276.0], [42.7, 7276.0], [42.8, 7276.0], [42.9, 7276.0], [43.0, 7569.0], [43.1, 7569.0], [43.2, 7569.0], [43.3, 7569.0], [43.4, 7569.0], [43.5, 7708.0], [43.6, 7708.0], [43.7, 7708.0], [43.8, 7708.0], [43.9, 7708.0], [44.0, 7730.0], [44.1, 7730.0], [44.2, 7730.0], [44.3, 7730.0], [44.4, 7730.0], [44.5, 8083.0], [44.6, 8083.0], [44.7, 8083.0], [44.8, 8083.0], [44.9, 8083.0], [45.0, 8550.0], [45.1, 8550.0], [45.2, 8550.0], [45.3, 8550.0], [45.4, 8550.0], [45.5, 8895.0], [45.6, 8895.0], [45.7, 8895.0], [45.8, 8895.0], [45.9, 8895.0], [46.0, 9291.0], [46.1, 9291.0], [46.2, 9291.0], [46.3, 9291.0], [46.4, 9291.0], [46.5, 9326.0], [46.6, 9326.0], [46.7, 9326.0], [46.8, 9326.0], [46.9, 9326.0], [47.0, 9330.0], [47.1, 9330.0], [47.2, 9330.0], [47.3, 9330.0], [47.4, 9330.0], [47.5, 9531.0], [47.6, 9531.0], [47.7, 9531.0], [47.8, 9531.0], [47.9, 9531.0], [48.0, 10063.0], [48.1, 10063.0], [48.2, 10063.0], [48.3, 10063.0], [48.4, 10063.0], [48.5, 10362.0], [48.6, 10362.0], [48.7, 10362.0], [48.8, 10362.0], [48.9, 10362.0], [49.0, 10647.0], [49.1, 10647.0], [49.2, 10647.0], [49.3, 10647.0], [49.4, 10647.0], [49.5, 11364.0], [49.6, 11364.0], [49.7, 11364.0], [49.8, 11364.0], [49.9, 11364.0], [50.0, 11776.0], [50.1, 11776.0], [50.2, 11776.0], [50.3, 11776.0], [50.4, 11776.0], [50.5, 11813.0], [50.6, 11813.0], [50.7, 11813.0], [50.8, 11813.0], [50.9, 11813.0], [51.0, 12350.0], [51.1, 12350.0], [51.2, 12350.0], [51.3, 12350.0], [51.4, 12350.0], [51.5, 12567.0], [51.6, 12567.0], [51.7, 12567.0], [51.8, 12567.0], [51.9, 12567.0], [52.0, 12607.0], [52.1, 12607.0], [52.2, 12607.0], [52.3, 12607.0], [52.4, 12607.0], [52.5, 12615.0], [52.6, 12615.0], [52.7, 12615.0], [52.8, 12615.0], [52.9, 12615.0], [53.0, 12808.0], [53.1, 12808.0], [53.2, 12808.0], [53.3, 12808.0], [53.4, 12808.0], [53.5, 12812.0], [53.6, 12812.0], [53.7, 12812.0], [53.8, 12812.0], [53.9, 12812.0], [54.0, 13008.0], [54.1, 13008.0], [54.2, 13008.0], [54.3, 13008.0], [54.4, 13008.0], [54.5, 13165.0], [54.6, 13165.0], [54.7, 13165.0], [54.8, 13165.0], [54.9, 13165.0], [55.0, 13187.0], [55.1, 13187.0], [55.2, 13187.0], [55.3, 13187.0], [55.4, 13187.0], [55.5, 13471.0], [55.6, 13471.0], [55.7, 13471.0], [55.8, 13471.0], [55.9, 13471.0], [56.0, 13664.0], [56.1, 13664.0], [56.2, 13664.0], [56.3, 13664.0], [56.4, 13664.0], [56.5, 13854.0], [56.6, 13854.0], [56.7, 13854.0], [56.8, 13854.0], [56.9, 13854.0], [57.0, 13903.0], [57.1, 13903.0], [57.2, 13903.0], [57.3, 13903.0], [57.4, 13903.0], [57.5, 13918.0], [57.6, 13918.0], [57.7, 13918.0], [57.8, 13918.0], [57.9, 13918.0], [58.0, 14049.0], [58.1, 14049.0], [58.2, 14049.0], [58.3, 14049.0], [58.4, 14049.0], [58.5, 14111.0], [58.6, 14111.0], [58.7, 14111.0], [58.8, 14111.0], [58.9, 14111.0], [59.0, 14155.0], [59.1, 14155.0], [59.2, 14155.0], [59.3, 14155.0], [59.4, 14155.0], [59.5, 14614.0], [59.6, 14614.0], [59.7, 14614.0], [59.8, 14614.0], [59.9, 14614.0], [60.0, 14999.0], [60.1, 14999.0], [60.2, 14999.0], [60.3, 14999.0], [60.4, 14999.0], [60.5, 15162.0], [60.6, 15162.0], [60.7, 15162.0], [60.8, 15162.0], [60.9, 15162.0], [61.0, 15291.0], [61.1, 15291.0], [61.2, 15291.0], [61.3, 15291.0], [61.4, 15291.0], [61.5, 15292.0], [61.6, 15292.0], [61.7, 15292.0], [61.8, 15292.0], [61.9, 15292.0], [62.0, 15498.0], [62.1, 15498.0], [62.2, 15498.0], [62.3, 15498.0], [62.4, 15498.0], [62.5, 15582.0], [62.6, 15582.0], [62.7, 15582.0], [62.8, 15582.0], [62.9, 15582.0], [63.0, 16475.0], [63.1, 16475.0], [63.2, 16475.0], [63.3, 16475.0], [63.4, 16475.0], [63.5, 16506.0], [63.6, 16506.0], [63.7, 16506.0], [63.8, 16506.0], [63.9, 16506.0], [64.0, 16546.0], [64.1, 16546.0], [64.2, 16546.0], [64.3, 16546.0], [64.4, 16546.0], [64.5, 16803.0], [64.6, 16803.0], [64.7, 16803.0], [64.8, 16803.0], [64.9, 16803.0], [65.0, 17365.0], [65.1, 17365.0], [65.2, 17365.0], [65.3, 17365.0], [65.4, 17365.0], [65.5, 17469.0], [65.6, 17469.0], [65.7, 17469.0], [65.8, 17469.0], [65.9, 17469.0], [66.0, 17797.0], [66.1, 17797.0], [66.2, 17797.0], [66.3, 17797.0], [66.4, 17797.0], [66.5, 17802.0], [66.6, 17802.0], [66.7, 17802.0], [66.8, 17802.0], [66.9, 17802.0], [67.0, 17890.0], [67.1, 17890.0], [67.2, 17890.0], [67.3, 17890.0], [67.4, 17890.0], [67.5, 18182.0], [67.6, 18182.0], [67.7, 18182.0], [67.8, 18182.0], [67.9, 18182.0], [68.0, 18264.0], [68.1, 18264.0], [68.2, 18264.0], [68.3, 18264.0], [68.4, 18264.0], [68.5, 18514.0], [68.6, 18514.0], [68.7, 18514.0], [68.8, 18514.0], [68.9, 18514.0], [69.0, 18557.0], [69.1, 18557.0], [69.2, 18557.0], [69.3, 18557.0], [69.4, 18557.0], [69.5, 19048.0], [69.6, 19048.0], [69.7, 19048.0], [69.8, 19048.0], [69.9, 19048.0], [70.0, 19251.0], [70.1, 19251.0], [70.2, 19251.0], [70.3, 19251.0], [70.4, 19251.0], [70.5, 19476.0], [70.6, 19476.0], [70.7, 19476.0], [70.8, 19476.0], [70.9, 19476.0], [71.0, 19511.0], [71.1, 19511.0], [71.2, 19511.0], [71.3, 19511.0], [71.4, 19511.0], [71.5, 19567.0], [71.6, 19567.0], [71.7, 19567.0], [71.8, 19567.0], [71.9, 19567.0], [72.0, 19569.0], [72.1, 19569.0], [72.2, 19569.0], [72.3, 19569.0], [72.4, 19569.0], [72.5, 20714.0], [72.6, 20714.0], [72.7, 20714.0], [72.8, 20714.0], [72.9, 20714.0], [73.0, 20972.0], [73.1, 20972.0], [73.2, 20972.0], [73.3, 20972.0], [73.4, 20972.0], [73.5, 20973.0], [73.6, 20973.0], [73.7, 20973.0], [73.8, 20973.0], [73.9, 20973.0], [74.0, 20978.0], [74.1, 20978.0], [74.2, 20978.0], [74.3, 20978.0], [74.4, 20978.0], [74.5, 21396.0], [74.6, 21396.0], [74.7, 21396.0], [74.8, 21396.0], [74.9, 21396.0], [75.0, 21519.0], [75.1, 21519.0], [75.2, 21519.0], [75.3, 21519.0], [75.4, 21519.0], [75.5, 21796.0], [75.6, 21796.0], [75.7, 21796.0], [75.8, 21796.0], [75.9, 21796.0], [76.0, 21980.0], [76.1, 21980.0], [76.2, 21980.0], [76.3, 21980.0], [76.4, 21980.0], [76.5, 22468.0], [76.6, 22468.0], [76.7, 22468.0], [76.8, 22468.0], [76.9, 22468.0], [77.0, 22797.0], [77.1, 22797.0], [77.2, 22797.0], [77.3, 22797.0], [77.4, 22797.0], [77.5, 23179.0], [77.6, 23179.0], [77.7, 23179.0], [77.8, 23179.0], [77.9, 23179.0], [78.0, 23266.0], [78.1, 23266.0], [78.2, 23266.0], [78.3, 23266.0], [78.4, 23266.0], [78.5, 23298.0], [78.6, 23298.0], [78.7, 23298.0], [78.8, 23298.0], [78.9, 23298.0], [79.0, 23452.0], [79.1, 23452.0], [79.2, 23452.0], [79.3, 23452.0], [79.4, 23452.0], [79.5, 23785.0], [79.6, 23785.0], [79.7, 23785.0], [79.8, 23785.0], [79.9, 23785.0], [80.0, 23857.0], [80.1, 23857.0], [80.2, 23857.0], [80.3, 23857.0], [80.4, 23857.0], [80.5, 24204.0], [80.6, 24204.0], [80.7, 24204.0], [80.8, 24204.0], [80.9, 24204.0], [81.0, 24215.0], [81.1, 24215.0], [81.2, 24215.0], [81.3, 24215.0], [81.4, 24215.0], [81.5, 24492.0], [81.6, 24492.0], [81.7, 24492.0], [81.8, 24492.0], [81.9, 24492.0], [82.0, 24912.0], [82.1, 24912.0], [82.2, 24912.0], [82.3, 24912.0], [82.4, 24912.0], [82.5, 25044.0], [82.6, 25044.0], [82.7, 25044.0], [82.8, 25044.0], [82.9, 25044.0], [83.0, 25986.0], [83.1, 25986.0], [83.2, 25986.0], [83.3, 25986.0], [83.4, 25986.0], [83.5, 26123.0], [83.6, 26123.0], [83.7, 26123.0], [83.8, 26123.0], [83.9, 26123.0], [84.0, 27499.0], [84.1, 27499.0], [84.2, 27499.0], [84.3, 27499.0], [84.4, 27499.0], [84.5, 27945.0], [84.6, 27945.0], [84.7, 27945.0], [84.8, 27945.0], [84.9, 27945.0], [85.0, 28051.0], [85.1, 28051.0], [85.2, 28051.0], [85.3, 28051.0], [85.4, 28051.0], [85.5, 28137.0], [85.6, 28137.0], [85.7, 28137.0], [85.8, 28137.0], [85.9, 28137.0], [86.0, 28730.0], [86.1, 28730.0], [86.2, 28730.0], [86.3, 28730.0], [86.4, 28730.0], [86.5, 31492.0], [86.6, 31492.0], [86.7, 31492.0], [86.8, 31492.0], [86.9, 31492.0], [87.0, 31660.0], [87.1, 31660.0], [87.2, 31660.0], [87.3, 31660.0], [87.4, 31660.0], [87.5, 32222.0], [87.6, 32222.0], [87.7, 32222.0], [87.8, 32222.0], [87.9, 32222.0], [88.0, 33246.0], [88.1, 33246.0], [88.2, 33246.0], [88.3, 33246.0], [88.4, 33246.0], [88.5, 33446.0], [88.6, 33446.0], [88.7, 33446.0], [88.8, 33446.0], [88.9, 33446.0], [89.0, 34133.0], [89.1, 34133.0], [89.2, 34133.0], [89.3, 34133.0], [89.4, 34133.0], [89.5, 34853.0], [89.6, 34853.0], [89.7, 34853.0], [89.8, 34853.0], [89.9, 34853.0], [90.0, 35512.0], [90.1, 35512.0], [90.2, 35512.0], [90.3, 35512.0], [90.4, 35512.0], [90.5, 36503.0], [90.6, 36503.0], [90.7, 36503.0], [90.8, 36503.0], [90.9, 36503.0], [91.0, 38278.0], [91.1, 38278.0], [91.2, 38278.0], [91.3, 38278.0], [91.4, 38278.0], [91.5, 39064.0], [91.6, 39064.0], [91.7, 39064.0], [91.8, 39064.0], [91.9, 39064.0], [92.0, 39699.0], [92.1, 39699.0], [92.2, 39699.0], [92.3, 39699.0], [92.4, 39699.0], [92.5, 40235.0], [92.6, 40235.0], [92.7, 40235.0], [92.8, 40235.0], [92.9, 40235.0], [93.0, 44529.0], [93.1, 44529.0], [93.2, 44529.0], [93.3, 44529.0], [93.4, 44529.0], [93.5, 47199.0], [93.6, 47199.0], [93.7, 47199.0], [93.8, 47199.0], [93.9, 47199.0], [94.0, 47876.0], [94.1, 47876.0], [94.2, 47876.0], [94.3, 47876.0], [94.4, 47876.0], [94.5, 47926.0], [94.6, 47926.0], [94.7, 47926.0], [94.8, 47926.0], [94.9, 47926.0], [95.0, 49973.0], [95.1, 49973.0], [95.2, 49973.0], [95.3, 49973.0], [95.4, 49973.0], [95.5, 50077.0], [95.6, 50077.0], [95.7, 50077.0], [95.8, 50077.0], [95.9, 50077.0], [96.0, 51331.0], [96.1, 51331.0], [96.2, 51331.0], [96.3, 51331.0], [96.4, 51331.0], [96.5, 53622.0], [96.6, 53622.0], [96.7, 53622.0], [96.8, 53622.0], [96.9, 53622.0], [97.0, 56476.0], [97.1, 56476.0], [97.2, 56476.0], [97.3, 56476.0], [97.4, 56476.0], [97.5, 58241.0], [97.6, 58241.0], [97.7, 58241.0], [97.8, 58241.0], [97.9, 58241.0], [98.0, 61911.0], [98.1, 61911.0], [98.2, 61911.0], [98.3, 61911.0], [98.4, 61911.0], [98.5, 68208.0], [98.6, 68208.0], [98.7, 68208.0], [98.8, 68208.0], [98.9, 68208.0], [99.0, 72178.0], [99.1, 72178.0], [99.2, 72178.0], [99.3, 72178.0], [99.4, 72178.0], [99.5, 86885.0], [99.6, 86885.0], [99.7, 86885.0], [99.8, 86885.0], [99.9, 86885.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 5.0, "series": [{"data": [[34100.0, 1.0], [35500.0, 1.0], [36500.0, 1.0], [44500.0, 1.0], [47100.0, 1.0], [47900.0, 1.0], [49900.0, 1.0], [51300.0, 1.0], [61900.0, 1.0], [68200.0, 1.0], [500.0, 3.0], [600.0, 2.0], [700.0, 1.0], [900.0, 1.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 1.0], [1500.0, 5.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 3.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 3.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 3.0], [3700.0, 4.0], [3800.0, 1.0], [4100.0, 3.0], [4300.0, 2.0], [4500.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [72100.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [5000.0, 1.0], [5400.0, 1.0], [5800.0, 2.0], [6100.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 2.0], [7500.0, 1.0], [7700.0, 2.0], [8000.0, 1.0], [8500.0, 1.0], [8800.0, 1.0], [9200.0, 1.0], [9300.0, 2.0], [9500.0, 1.0], [10000.0, 1.0], [10300.0, 1.0], [10600.0, 1.0], [11700.0, 1.0], [11300.0, 1.0], [11800.0, 1.0], [12600.0, 2.0], [12300.0, 1.0], [12500.0, 1.0], [12800.0, 2.0], [13100.0, 2.0], [13000.0, 1.0], [13400.0, 1.0], [13600.0, 1.0], [13800.0, 1.0], [14100.0, 2.0], [14000.0, 1.0], [13900.0, 2.0], [14600.0, 1.0], [15200.0, 2.0], [15100.0, 1.0], [14900.0, 1.0], [15400.0, 1.0], [15500.0, 1.0], [17400.0, 1.0], [16500.0, 2.0], [16400.0, 1.0], [16800.0, 1.0], [17300.0, 1.0], [17800.0, 2.0], [17700.0, 1.0], [18100.0, 1.0], [18200.0, 1.0], [18500.0, 2.0], [19200.0, 1.0], [19400.0, 1.0], [19000.0, 1.0], [19500.0, 3.0], [21300.0, 1.0], [21500.0, 1.0], [20900.0, 3.0], [20700.0, 1.0], [21700.0, 1.0], [22400.0, 1.0], [21900.0, 1.0], [23200.0, 2.0], [23100.0, 1.0], [23400.0, 1.0], [22700.0, 1.0], [24200.0, 2.0], [23700.0, 1.0], [23800.0, 1.0], [24400.0, 1.0], [25000.0, 1.0], [24900.0, 1.0], [25900.0, 1.0], [26100.0, 1.0], [27400.0, 1.0], [27900.0, 1.0], [28100.0, 1.0], [28000.0, 1.0], [28700.0, 1.0], [31600.0, 1.0], [31400.0, 1.0], [32200.0, 1.0], [33200.0, 1.0], [33400.0, 1.0], [34800.0, 1.0], [38200.0, 1.0], [39000.0, 1.0], [39600.0, 1.0], [40200.0, 1.0], [47800.0, 1.0], [50000.0, 1.0], [53600.0, 1.0], [56400.0, 1.0], [58200.0, 1.0], [86800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 86800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 171.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 171.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.61111111111111, "minX": 1.77834792E12, "maxY": 42.86231884057971, "series": [{"data": [[1.77834804E12, 6.61111111111111], [1.77834798E12, 42.86231884057971], [1.77834792E12, 17.5]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834804E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 621.0, "minX": 1.0, "maxY": 49805.66666666667, "series": [{"data": [[2.0, 621.0], [3.0, 34395.0], [4.0, 49805.66666666667], [5.0, 8083.0], [6.0, 13903.0], [7.0, 37316.0], [8.0, 5862.0], [9.0, 4791.0], [10.0, 10739.666666666666], [11.0, 13918.0], [12.0, 1524.5], [13.0, 2578.75], [14.0, 6829.0], [15.0, 9419.666666666666], [16.0, 9326.666666666668], [17.0, 4979.454545454545], [18.0, 12866.0], [19.0, 4996.333333333334], [20.0, 21907.600000000002], [21.0, 14174.5], [22.0, 2522.0], [23.0, 28268.5], [24.0, 33315.0], [25.0, 12660.666666666666], [26.0, 1520.0], [27.0, 1903.0], [28.0, 1613.0], [29.0, 9531.0], [30.0, 11228.0], [31.0, 8550.0], [33.0, 33568.0], [32.0, 21386.0], [34.0, 7275.0], [35.0, 12443.8], [36.0, 8134.5714285714275], [37.0, 8704.857142857143], [38.0, 2379.0], [39.0, 32972.5], [41.0, 19679.0], [40.0, 14313.0], [43.0, 4188.0], [42.0, 3638.0], [45.0, 15292.0], [44.0, 17786.000000000004], [47.0, 3011.0], [46.0, 13854.0], [49.0, 2952.0], [48.0, 3799.0], [51.0, 13664.0], [50.0, 12586.2], [53.0, 20079.88888888889], [52.0, 2732.0], [55.0, 22098.0], [54.0, 24346.875], [57.0, 2970.0], [56.0, 3718.0], [59.0, 17878.5], [58.0, 3003.0], [61.0, 17411.5], [60.0, 31165.0], [62.0, 21135.0], [63.0, 18861.0], [65.0, 25350.571428571428], [64.0, 13299.5], [1.0, 34853.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[34.02000000000001, 15182.815000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 65.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 36.6, "minX": 1.77834792E12, "maxY": 16979.166666666668, "series": [{"data": [[1.77834804E12, 2749.7166666666667], [1.77834798E12, 16979.166666666668], [1.77834792E12, 5925.666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77834804E12, 36.6], [1.77834798E12, 246.03333333333333], [1.77834792E12, 87.43333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834804E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 4808.65909090909, "minX": 1.77834792E12, "maxY": 23738.833333333336, "series": [{"data": [[1.77834804E12, 23738.833333333336], [1.77834798E12, 17374.514492753628], [1.77834792E12, 4808.65909090909]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834804E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3947.454545454545, "minX": 1.77834792E12, "maxY": 9918.826086956517, "series": [{"data": [[1.77834804E12, 8223.944444444443], [1.77834798E12, 9918.826086956517], [1.77834792E12, 3947.454545454545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834804E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2546.5454545454554, "minX": 1.77834792E12, "maxY": 9690.630434782603, "series": [{"data": [[1.77834804E12, 5784.333333333334], [1.77834798E12, 9690.630434782603], [1.77834792E12, 2546.5454545454554]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834804E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 548.0, "minX": 1.77834792E12, "maxY": 86885.0, "series": [{"data": [[1.77834804E12, 86885.0], [1.77834798E12, 58241.0], [1.77834792E12, 13165.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77834804E12, 73648.70000000003], [1.77834798E12, 35236.2], [1.77834792E12, 7721.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77834804E12, 86885.0], [1.77834798E12, 57852.700000000004], [1.77834792E12, 13165.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77834804E12, 86885.0], [1.77834798E12, 46502.59999999994], [1.77834792E12, 12767.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77834804E12, 573.0], [1.77834798E12, 1143.0], [1.77834792E12, 548.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77834804E12, 7221.0], [1.77834798E12, 14049.0], [1.77834792E12, 4172.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834804E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 4510.5, "minX": 1.0, "maxY": 49973.0, "series": [{"data": [[4.0, 4510.5], [1.0, 6172.5], [2.0, 7158.5], [8.0, 9093.0], [9.0, 7080.5], [5.0, 18829.0], [3.0, 7588.0], [6.0, 7475.5], [12.0, 18264.0], [7.0, 19567.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 20244.5], [5.0, 22468.0], [6.0, 28041.0], [12.0, 49973.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 15484.0, "series": [{"data": [[4.0, 3087.0], [1.0, 4228.5], [2.0, 5611.0], [8.0, 8991.5], [9.0, 2220.5], [5.0, 12561.5], [3.0, 3194.0], [6.0, 6851.0], [12.0, 3530.0], [7.0, 15484.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0], [5.0, 0.0], [6.0, 0.0], [12.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.77834792E12, "maxY": 2.0, "series": [{"data": [[1.77834804E12, 0.15], [1.77834798E12, 2.0], [1.77834792E12, 1.1833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834804E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77834792E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.77834798E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLException", "isController": false}, {"data": [[1.77834804E12, 0.3], [1.77834798E12, 2.0166666666666666], [1.77834792E12, 0.7166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77834798E12, 0.26666666666666666], [1.77834792E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834804E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77834792E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.77834804E12, 0.3], [1.77834798E12, 2.0166666666666666], [1.77834792E12, 0.7166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77834798E12, 0.2833333333333333], [1.77834792E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834804E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77834792E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.77834804E12, 0.3], [1.77834798E12, 2.0166666666666666], [1.77834792E12, 0.7166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77834798E12, 0.2833333333333333], [1.77834792E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834804E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

