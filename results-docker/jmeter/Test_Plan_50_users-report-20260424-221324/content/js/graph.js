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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 1413.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 179.0], [0.4, 179.0], [0.5, 179.0], [0.6, 179.0], [0.7, 179.0], [0.8, 179.0], [0.9, 179.0], [1.0, 183.0], [1.1, 183.0], [1.2, 183.0], [1.3, 183.0], [1.4, 183.0], [1.5, 183.0], [1.6, 183.0], [1.7, 183.0], [1.8, 183.0], [1.9, 183.0], [2.0, 188.0], [2.1, 188.0], [2.2, 188.0], [2.3, 188.0], [2.4, 188.0], [2.5, 188.0], [2.6, 188.0], [2.7, 188.0], [2.8, 188.0], [2.9, 188.0], [3.0, 188.0], [3.1, 188.0], [3.2, 188.0], [3.3, 188.0], [3.4, 188.0], [3.5, 188.0], [3.6, 188.0], [3.7, 188.0], [3.8, 188.0], [3.9, 188.0], [4.0, 189.0], [4.1, 189.0], [4.2, 189.0], [4.3, 189.0], [4.4, 189.0], [4.5, 189.0], [4.6, 189.0], [4.7, 189.0], [4.8, 189.0], [4.9, 189.0], [5.0, 190.0], [5.1, 190.0], [5.2, 190.0], [5.3, 190.0], [5.4, 190.0], [5.5, 190.0], [5.6, 190.0], [5.7, 190.0], [5.8, 190.0], [5.9, 190.0], [6.0, 191.0], [6.1, 191.0], [6.2, 191.0], [6.3, 191.0], [6.4, 191.0], [6.5, 191.0], [6.6, 191.0], [6.7, 191.0], [6.8, 191.0], [6.9, 191.0], [7.0, 193.0], [7.1, 193.0], [7.2, 193.0], [7.3, 193.0], [7.4, 193.0], [7.5, 193.0], [7.6, 193.0], [7.7, 193.0], [7.8, 193.0], [7.9, 193.0], [8.0, 194.0], [8.1, 194.0], [8.2, 194.0], [8.3, 194.0], [8.4, 194.0], [8.5, 194.0], [8.6, 194.0], [8.7, 194.0], [8.8, 194.0], [8.9, 194.0], [9.0, 194.0], [9.1, 194.0], [9.2, 194.0], [9.3, 194.0], [9.4, 194.0], [9.5, 194.0], [9.6, 194.0], [9.7, 194.0], [9.8, 194.0], [9.9, 194.0], [10.0, 195.0], [10.1, 195.0], [10.2, 195.0], [10.3, 195.0], [10.4, 195.0], [10.5, 195.0], [10.6, 195.0], [10.7, 195.0], [10.8, 195.0], [10.9, 195.0], [11.0, 196.0], [11.1, 196.0], [11.2, 196.0], [11.3, 196.0], [11.4, 196.0], [11.5, 196.0], [11.6, 196.0], [11.7, 196.0], [11.8, 196.0], [11.9, 196.0], [12.0, 198.0], [12.1, 198.0], [12.2, 198.0], [12.3, 198.0], [12.4, 198.0], [12.5, 198.0], [12.6, 198.0], [12.7, 198.0], [12.8, 198.0], [12.9, 198.0], [13.0, 199.0], [13.1, 199.0], [13.2, 199.0], [13.3, 199.0], [13.4, 199.0], [13.5, 199.0], [13.6, 199.0], [13.7, 199.0], [13.8, 199.0], [13.9, 199.0], [14.0, 200.0], [14.1, 200.0], [14.2, 200.0], [14.3, 200.0], [14.4, 200.0], [14.5, 200.0], [14.6, 200.0], [14.7, 200.0], [14.8, 200.0], [14.9, 200.0], [15.0, 200.0], [15.1, 200.0], [15.2, 200.0], [15.3, 200.0], [15.4, 200.0], [15.5, 200.0], [15.6, 200.0], [15.7, 200.0], [15.8, 200.0], [15.9, 200.0], [16.0, 206.0], [16.1, 206.0], [16.2, 206.0], [16.3, 206.0], [16.4, 206.0], [16.5, 206.0], [16.6, 206.0], [16.7, 206.0], [16.8, 206.0], [16.9, 206.0], [17.0, 211.0], [17.1, 211.0], [17.2, 211.0], [17.3, 211.0], [17.4, 211.0], [17.5, 211.0], [17.6, 211.0], [17.7, 211.0], [17.8, 211.0], [17.9, 211.0], [18.0, 216.0], [18.1, 216.0], [18.2, 216.0], [18.3, 216.0], [18.4, 216.0], [18.5, 216.0], [18.6, 216.0], [18.7, 216.0], [18.8, 216.0], [18.9, 216.0], [19.0, 222.0], [19.1, 222.0], [19.2, 222.0], [19.3, 222.0], [19.4, 222.0], [19.5, 222.0], [19.6, 222.0], [19.7, 222.0], [19.8, 222.0], [19.9, 222.0], [20.0, 222.0], [20.1, 222.0], [20.2, 222.0], [20.3, 222.0], [20.4, 222.0], [20.5, 222.0], [20.6, 222.0], [20.7, 222.0], [20.8, 222.0], [20.9, 222.0], [21.0, 223.0], [21.1, 223.0], [21.2, 223.0], [21.3, 223.0], [21.4, 223.0], [21.5, 223.0], [21.6, 223.0], [21.7, 223.0], [21.8, 223.0], [21.9, 223.0], [22.0, 230.0], [22.1, 230.0], [22.2, 230.0], [22.3, 230.0], [22.4, 230.0], [22.5, 230.0], [22.6, 230.0], [22.7, 230.0], [22.8, 230.0], [22.9, 230.0], [23.0, 230.0], [23.1, 230.0], [23.2, 230.0], [23.3, 230.0], [23.4, 230.0], [23.5, 230.0], [23.6, 230.0], [23.7, 230.0], [23.8, 230.0], [23.9, 230.0], [24.0, 230.0], [24.1, 230.0], [24.2, 230.0], [24.3, 230.0], [24.4, 230.0], [24.5, 230.0], [24.6, 230.0], [24.7, 230.0], [24.8, 230.0], [24.9, 230.0], [25.0, 235.0], [25.1, 235.0], [25.2, 235.0], [25.3, 235.0], [25.4, 235.0], [25.5, 235.0], [25.6, 235.0], [25.7, 235.0], [25.8, 235.0], [25.9, 235.0], [26.0, 238.0], [26.1, 238.0], [26.2, 238.0], [26.3, 238.0], [26.4, 238.0], [26.5, 238.0], [26.6, 238.0], [26.7, 238.0], [26.8, 238.0], [26.9, 238.0], [27.0, 238.0], [27.1, 238.0], [27.2, 238.0], [27.3, 238.0], [27.4, 238.0], [27.5, 238.0], [27.6, 238.0], [27.7, 238.0], [27.8, 238.0], [27.9, 238.0], [28.0, 239.0], [28.1, 239.0], [28.2, 239.0], [28.3, 239.0], [28.4, 239.0], [28.5, 239.0], [28.6, 239.0], [28.7, 239.0], [28.8, 239.0], [28.9, 239.0], [29.0, 239.0], [29.1, 239.0], [29.2, 239.0], [29.3, 239.0], [29.4, 239.0], [29.5, 239.0], [29.6, 239.0], [29.7, 239.0], [29.8, 239.0], [29.9, 239.0], [30.0, 241.0], [30.1, 241.0], [30.2, 241.0], [30.3, 241.0], [30.4, 241.0], [30.5, 241.0], [30.6, 241.0], [30.7, 241.0], [30.8, 241.0], [30.9, 241.0], [31.0, 242.0], [31.1, 242.0], [31.2, 242.0], [31.3, 242.0], [31.4, 242.0], [31.5, 242.0], [31.6, 242.0], [31.7, 242.0], [31.8, 242.0], [31.9, 242.0], [32.0, 246.0], [32.1, 246.0], [32.2, 246.0], [32.3, 246.0], [32.4, 246.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 249.0], [33.1, 249.0], [33.2, 249.0], [33.3, 249.0], [33.4, 249.0], [33.5, 249.0], [33.6, 249.0], [33.7, 249.0], [33.8, 249.0], [33.9, 249.0], [34.0, 250.0], [34.1, 250.0], [34.2, 250.0], [34.3, 250.0], [34.4, 250.0], [34.5, 250.0], [34.6, 250.0], [34.7, 250.0], [34.8, 250.0], [34.9, 250.0], [35.0, 255.0], [35.1, 255.0], [35.2, 255.0], [35.3, 255.0], [35.4, 255.0], [35.5, 255.0], [35.6, 255.0], [35.7, 255.0], [35.8, 255.0], [35.9, 255.0], [36.0, 267.0], [36.1, 267.0], [36.2, 267.0], [36.3, 267.0], [36.4, 267.0], [36.5, 267.0], [36.6, 267.0], [36.7, 267.0], [36.8, 267.0], [36.9, 267.0], [37.0, 269.0], [37.1, 269.0], [37.2, 269.0], [37.3, 269.0], [37.4, 269.0], [37.5, 269.0], [37.6, 269.0], [37.7, 269.0], [37.8, 269.0], [37.9, 269.0], [38.0, 273.0], [38.1, 273.0], [38.2, 273.0], [38.3, 273.0], [38.4, 273.0], [38.5, 273.0], [38.6, 273.0], [38.7, 273.0], [38.8, 273.0], [38.9, 273.0], [39.0, 275.0], [39.1, 275.0], [39.2, 275.0], [39.3, 275.0], [39.4, 275.0], [39.5, 275.0], [39.6, 275.0], [39.7, 275.0], [39.8, 275.0], [39.9, 275.0], [40.0, 278.0], [40.1, 278.0], [40.2, 278.0], [40.3, 278.0], [40.4, 278.0], [40.5, 278.0], [40.6, 278.0], [40.7, 278.0], [40.8, 278.0], [40.9, 278.0], [41.0, 279.0], [41.1, 279.0], [41.2, 279.0], [41.3, 279.0], [41.4, 279.0], [41.5, 279.0], [41.6, 279.0], [41.7, 279.0], [41.8, 279.0], [41.9, 279.0], [42.0, 282.0], [42.1, 282.0], [42.2, 282.0], [42.3, 282.0], [42.4, 282.0], [42.5, 282.0], [42.6, 282.0], [42.7, 282.0], [42.8, 282.0], [42.9, 282.0], [43.0, 282.0], [43.1, 282.0], [43.2, 282.0], [43.3, 282.0], [43.4, 282.0], [43.5, 282.0], [43.6, 282.0], [43.7, 282.0], [43.8, 282.0], [43.9, 282.0], [44.0, 284.0], [44.1, 284.0], [44.2, 284.0], [44.3, 284.0], [44.4, 284.0], [44.5, 284.0], [44.6, 284.0], [44.7, 284.0], [44.8, 284.0], [44.9, 284.0], [45.0, 288.0], [45.1, 288.0], [45.2, 288.0], [45.3, 288.0], [45.4, 288.0], [45.5, 288.0], [45.6, 288.0], [45.7, 288.0], [45.8, 288.0], [45.9, 288.0], [46.0, 292.0], [46.1, 292.0], [46.2, 292.0], [46.3, 292.0], [46.4, 292.0], [46.5, 292.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 295.0], [47.1, 295.0], [47.2, 295.0], [47.3, 295.0], [47.4, 295.0], [47.5, 295.0], [47.6, 295.0], [47.7, 295.0], [47.8, 295.0], [47.9, 295.0], [48.0, 297.0], [48.1, 297.0], [48.2, 297.0], [48.3, 297.0], [48.4, 297.0], [48.5, 297.0], [48.6, 297.0], [48.7, 297.0], [48.8, 297.0], [48.9, 297.0], [49.0, 299.0], [49.1, 299.0], [49.2, 299.0], [49.3, 299.0], [49.4, 299.0], [49.5, 299.0], [49.6, 299.0], [49.7, 299.0], [49.8, 299.0], [49.9, 299.0], [50.0, 554.0], [50.1, 554.0], [50.2, 554.0], [50.3, 554.0], [50.4, 554.0], [50.5, 554.0], [50.6, 554.0], [50.7, 554.0], [50.8, 554.0], [50.9, 554.0], [51.0, 564.0], [51.1, 564.0], [51.2, 564.0], [51.3, 564.0], [51.4, 564.0], [51.5, 564.0], [51.6, 564.0], [51.7, 564.0], [51.8, 564.0], [51.9, 564.0], [52.0, 565.0], [52.1, 565.0], [52.2, 565.0], [52.3, 565.0], [52.4, 565.0], [52.5, 565.0], [52.6, 565.0], [52.7, 565.0], [52.8, 565.0], [52.9, 565.0], [53.0, 571.0], [53.1, 571.0], [53.2, 571.0], [53.3, 571.0], [53.4, 571.0], [53.5, 571.0], [53.6, 571.0], [53.7, 571.0], [53.8, 571.0], [53.9, 571.0], [54.0, 574.0], [54.1, 574.0], [54.2, 574.0], [54.3, 574.0], [54.4, 574.0], [54.5, 574.0], [54.6, 574.0], [54.7, 574.0], [54.8, 574.0], [54.9, 574.0], [55.0, 577.0], [55.1, 577.0], [55.2, 577.0], [55.3, 577.0], [55.4, 577.0], [55.5, 577.0], [55.6, 577.0], [55.7, 577.0], [55.8, 577.0], [55.9, 577.0], [56.0, 578.0], [56.1, 578.0], [56.2, 578.0], [56.3, 578.0], [56.4, 578.0], [56.5, 578.0], [56.6, 578.0], [56.7, 578.0], [56.8, 578.0], [56.9, 578.0], [57.0, 597.0], [57.1, 597.0], [57.2, 597.0], [57.3, 597.0], [57.4, 597.0], [57.5, 597.0], [57.6, 597.0], [57.7, 597.0], [57.8, 597.0], [57.9, 597.0], [58.0, 611.0], [58.1, 611.0], [58.2, 611.0], [58.3, 611.0], [58.4, 611.0], [58.5, 611.0], [58.6, 611.0], [58.7, 611.0], [58.8, 611.0], [58.9, 611.0], [59.0, 613.0], [59.1, 613.0], [59.2, 613.0], [59.3, 613.0], [59.4, 613.0], [59.5, 613.0], [59.6, 613.0], [59.7, 613.0], [59.8, 613.0], [59.9, 613.0], [60.0, 654.0], [60.1, 654.0], [60.2, 654.0], [60.3, 654.0], [60.4, 654.0], [60.5, 654.0], [60.6, 654.0], [60.7, 654.0], [60.8, 654.0], [60.9, 654.0], [61.0, 662.0], [61.1, 662.0], [61.2, 662.0], [61.3, 662.0], [61.4, 662.0], [61.5, 662.0], [61.6, 662.0], [61.7, 662.0], [61.8, 662.0], [61.9, 662.0], [62.0, 665.0], [62.1, 665.0], [62.2, 665.0], [62.3, 665.0], [62.4, 665.0], [62.5, 665.0], [62.6, 665.0], [62.7, 665.0], [62.8, 665.0], [62.9, 665.0], [63.0, 679.0], [63.1, 679.0], [63.2, 679.0], [63.3, 679.0], [63.4, 679.0], [63.5, 679.0], [63.6, 679.0], [63.7, 679.0], [63.8, 679.0], [63.9, 679.0], [64.0, 691.0], [64.1, 691.0], [64.2, 691.0], [64.3, 691.0], [64.4, 691.0], [64.5, 691.0], [64.6, 691.0], [64.7, 691.0], [64.8, 691.0], [64.9, 691.0], [65.0, 697.0], [65.1, 697.0], [65.2, 697.0], [65.3, 697.0], [65.4, 697.0], [65.5, 697.0], [65.6, 697.0], [65.7, 697.0], [65.8, 697.0], [65.9, 697.0], [66.0, 699.0], [66.1, 699.0], [66.2, 699.0], [66.3, 699.0], [66.4, 699.0], [66.5, 699.0], [66.6, 699.0], [66.7, 699.0], [66.8, 699.0], [66.9, 699.0], [67.0, 711.0], [67.1, 711.0], [67.2, 711.0], [67.3, 711.0], [67.4, 711.0], [67.5, 711.0], [67.6, 711.0], [67.7, 711.0], [67.8, 711.0], [67.9, 711.0], [68.0, 715.0], [68.1, 715.0], [68.2, 715.0], [68.3, 715.0], [68.4, 715.0], [68.5, 715.0], [68.6, 715.0], [68.7, 715.0], [68.8, 715.0], [68.9, 715.0], [69.0, 738.0], [69.1, 738.0], [69.2, 738.0], [69.3, 738.0], [69.4, 738.0], [69.5, 738.0], [69.6, 738.0], [69.7, 738.0], [69.8, 738.0], [69.9, 738.0], [70.0, 742.0], [70.1, 742.0], [70.2, 742.0], [70.3, 742.0], [70.4, 742.0], [70.5, 742.0], [70.6, 742.0], [70.7, 742.0], [70.8, 742.0], [70.9, 742.0], [71.0, 747.0], [71.1, 747.0], [71.2, 747.0], [71.3, 747.0], [71.4, 747.0], [71.5, 747.0], [71.6, 747.0], [71.7, 747.0], [71.8, 747.0], [71.9, 747.0], [72.0, 748.0], [72.1, 748.0], [72.2, 748.0], [72.3, 748.0], [72.4, 748.0], [72.5, 748.0], [72.6, 748.0], [72.7, 748.0], [72.8, 748.0], [72.9, 748.0], [73.0, 749.0], [73.1, 749.0], [73.2, 749.0], [73.3, 749.0], [73.4, 749.0], [73.5, 749.0], [73.6, 749.0], [73.7, 749.0], [73.8, 749.0], [73.9, 749.0], [74.0, 758.0], [74.1, 758.0], [74.2, 758.0], [74.3, 758.0], [74.4, 758.0], [74.5, 758.0], [74.6, 758.0], [74.7, 758.0], [74.8, 758.0], [74.9, 758.0], [75.0, 763.0], [75.1, 763.0], [75.2, 763.0], [75.3, 763.0], [75.4, 763.0], [75.5, 763.0], [75.6, 763.0], [75.7, 763.0], [75.8, 763.0], [75.9, 763.0], [76.0, 770.0], [76.1, 770.0], [76.2, 770.0], [76.3, 770.0], [76.4, 770.0], [76.5, 770.0], [76.6, 770.0], [76.7, 770.0], [76.8, 770.0], [76.9, 770.0], [77.0, 770.0], [77.1, 770.0], [77.2, 770.0], [77.3, 770.0], [77.4, 770.0], [77.5, 770.0], [77.6, 770.0], [77.7, 770.0], [77.8, 770.0], [77.9, 770.0], [78.0, 778.0], [78.1, 778.0], [78.2, 778.0], [78.3, 778.0], [78.4, 778.0], [78.5, 778.0], [78.6, 778.0], [78.7, 778.0], [78.8, 778.0], [78.9, 778.0], [79.0, 784.0], [79.1, 784.0], [79.2, 784.0], [79.3, 784.0], [79.4, 784.0], [79.5, 784.0], [79.6, 784.0], [79.7, 784.0], [79.8, 784.0], [79.9, 784.0], [80.0, 787.0], [80.1, 787.0], [80.2, 787.0], [80.3, 787.0], [80.4, 787.0], [80.5, 787.0], [80.6, 787.0], [80.7, 787.0], [80.8, 787.0], [80.9, 787.0], [81.0, 794.0], [81.1, 794.0], [81.2, 794.0], [81.3, 794.0], [81.4, 794.0], [81.5, 794.0], [81.6, 794.0], [81.7, 794.0], [81.8, 794.0], [81.9, 794.0], [82.0, 818.0], [82.1, 818.0], [82.2, 818.0], [82.3, 818.0], [82.4, 818.0], [82.5, 818.0], [82.6, 818.0], [82.7, 818.0], [82.8, 818.0], [82.9, 818.0], [83.0, 835.0], [83.1, 835.0], [83.2, 835.0], [83.3, 835.0], [83.4, 835.0], [83.5, 835.0], [83.6, 835.0], [83.7, 835.0], [83.8, 835.0], [83.9, 835.0], [84.0, 838.0], [84.1, 838.0], [84.2, 838.0], [84.3, 838.0], [84.4, 838.0], [84.5, 838.0], [84.6, 838.0], [84.7, 838.0], [84.8, 838.0], [84.9, 838.0], [85.0, 880.0], [85.1, 880.0], [85.2, 880.0], [85.3, 880.0], [85.4, 880.0], [85.5, 880.0], [85.6, 880.0], [85.7, 880.0], [85.8, 880.0], [85.9, 880.0], [86.0, 1294.0], [86.1, 1294.0], [86.2, 1294.0], [86.3, 1294.0], [86.4, 1294.0], [86.5, 1294.0], [86.6, 1294.0], [86.7, 1294.0], [86.8, 1294.0], [86.9, 1294.0], [87.0, 1296.0], [87.1, 1296.0], [87.2, 1296.0], [87.3, 1296.0], [87.4, 1296.0], [87.5, 1296.0], [87.6, 1296.0], [87.7, 1296.0], [87.8, 1296.0], [87.9, 1296.0], [88.0, 1305.0], [88.1, 1305.0], [88.2, 1305.0], [88.3, 1305.0], [88.4, 1305.0], [88.5, 1305.0], [88.6, 1305.0], [88.7, 1305.0], [88.8, 1305.0], [88.9, 1305.0], [89.0, 1310.0], [89.1, 1310.0], [89.2, 1310.0], [89.3, 1310.0], [89.4, 1310.0], [89.5, 1310.0], [89.6, 1310.0], [89.7, 1310.0], [89.8, 1310.0], [89.9, 1310.0], [90.0, 1317.0], [90.1, 1317.0], [90.2, 1317.0], [90.3, 1317.0], [90.4, 1317.0], [90.5, 1317.0], [90.6, 1317.0], [90.7, 1317.0], [90.8, 1317.0], [90.9, 1317.0], [91.0, 1330.0], [91.1, 1330.0], [91.2, 1330.0], [91.3, 1330.0], [91.4, 1330.0], [91.5, 1330.0], [91.6, 1330.0], [91.7, 1330.0], [91.8, 1330.0], [91.9, 1330.0], [92.0, 1340.0], [92.1, 1340.0], [92.2, 1340.0], [92.3, 1340.0], [92.4, 1340.0], [92.5, 1340.0], [92.6, 1340.0], [92.7, 1340.0], [92.8, 1340.0], [92.9, 1340.0], [93.0, 1352.0], [93.1, 1352.0], [93.2, 1352.0], [93.3, 1352.0], [93.4, 1352.0], [93.5, 1352.0], [93.6, 1352.0], [93.7, 1352.0], [93.8, 1352.0], [93.9, 1352.0], [94.0, 1360.0], [94.1, 1360.0], [94.2, 1360.0], [94.3, 1360.0], [94.4, 1360.0], [94.5, 1360.0], [94.6, 1360.0], [94.7, 1360.0], [94.8, 1360.0], [94.9, 1360.0], [95.0, 1363.0], [95.1, 1363.0], [95.2, 1363.0], [95.3, 1363.0], [95.4, 1363.0], [95.5, 1363.0], [95.6, 1363.0], [95.7, 1363.0], [95.8, 1363.0], [95.9, 1363.0], [96.0, 1371.0], [96.1, 1371.0], [96.2, 1371.0], [96.3, 1371.0], [96.4, 1371.0], [96.5, 1371.0], [96.6, 1371.0], [96.7, 1371.0], [96.8, 1371.0], [96.9, 1371.0], [97.0, 1380.0], [97.1, 1380.0], [97.2, 1380.0], [97.3, 1380.0], [97.4, 1380.0], [97.5, 1380.0], [97.6, 1380.0], [97.7, 1380.0], [97.8, 1380.0], [97.9, 1380.0], [98.0, 1403.0], [98.1, 1403.0], [98.2, 1403.0], [98.3, 1403.0], [98.4, 1403.0], [98.5, 1403.0], [98.6, 1403.0], [98.7, 1403.0], [98.8, 1403.0], [98.9, 1403.0], [99.0, 1413.0], [99.1, 1413.0], [99.2, 1413.0], [99.3, 1413.0], [99.4, 1413.0], [99.5, 1413.0], [99.6, 1413.0], [99.7, 1413.0], [99.8, 1413.0], [99.9, 1413.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 36.0, "series": [{"data": [[600.0, 9.0], [1200.0, 2.0], [1300.0, 10.0], [1400.0, 2.0], [700.0, 15.0], [800.0, 4.0], [200.0, 36.0], [100.0, 14.0], [500.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [[0.0, 50.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.2777777777777777, "minX": 1.77706158E12, "maxY": 3.5625000000000004, "series": [{"data": [[1.77706158E12, 3.5625000000000004], [1.77706164E12, 3.2777777777777777]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706164E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 279.0, "minX": 1.0, "maxY": 785.1428571428571, "series": [{"data": [[4.0, 545.9743589743588], [2.0, 785.1428571428571], [1.0, 279.0], [5.0, 408.75], [3.0, 566.0222222222224]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.4600000000000004, 558.0899999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 73.2, "minX": 1.77706158E12, "maxY": 10761.65, "series": [{"data": [[1.77706158E12, 10761.65], [1.77706164E12, 7588.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77706158E12, 130.13333333333333], [1.77706164E12, 73.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706164E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 548.7968749999999, "minX": 1.77706158E12, "maxY": 574.6111111111111, "series": [{"data": [[1.77706158E12, 548.7968749999999], [1.77706164E12, 574.6111111111111]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706164E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 517.0468750000001, "minX": 1.77706158E12, "maxY": 529.5833333333333, "series": [{"data": [[1.77706158E12, 517.0468750000001], [1.77706164E12, 529.5833333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706164E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 319.125, "minX": 1.77706158E12, "maxY": 331.33333333333337, "series": [{"data": [[1.77706158E12, 319.125], [1.77706164E12, 331.33333333333337]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706164E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.77706158E12, "maxY": 1413.0, "series": [{"data": [[1.77706158E12, 1413.0], [1.77706164E12, 1380.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77706158E12, 1307.5], [1.77706164E12, 1360.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77706158E12, 1413.0], [1.77706164E12, 1380.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77706158E12, 1346.5], [1.77706164E12, 1372.35]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77706158E12, 179.0], [1.77706164E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77706158E12, 559.0], [1.77706164E12, 298.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706164E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 646.0, "series": [{"data": [[4.0, 646.0], [2.0, 297.0], [1.0, 284.0], [3.0, 554.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 222.0, "minX": 1.0, "maxY": 604.0, "series": [{"data": [[4.0, 604.0], [2.0, 227.5], [1.0, 222.0], [3.0, 538.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.77706158E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.77706158E12, 1.1166666666666667], [1.77706164E12, 0.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706164E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77706158E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.77706158E12, 1.0666666666666667], [1.77706164E12, 0.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706164E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77706158E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.77706158E12, 1.0666666666666667], [1.77706164E12, 0.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706164E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77706158E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.77706158E12, 1.0666666666666667], [1.77706164E12, 0.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706164E12, "title": "Total Transactions Per Second"}},
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

