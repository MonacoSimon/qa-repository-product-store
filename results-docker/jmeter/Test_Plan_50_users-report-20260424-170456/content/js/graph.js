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
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 1217.0, "series": [{"data": [[0.0, 189.0], [0.1, 189.0], [0.2, 189.0], [0.3, 189.0], [0.4, 189.0], [0.5, 189.0], [0.6, 189.0], [0.7, 189.0], [0.8, 189.0], [0.9, 189.0], [1.0, 192.0], [1.1, 192.0], [1.2, 192.0], [1.3, 192.0], [1.4, 192.0], [1.5, 192.0], [1.6, 192.0], [1.7, 192.0], [1.8, 192.0], [1.9, 192.0], [2.0, 192.0], [2.1, 192.0], [2.2, 192.0], [2.3, 192.0], [2.4, 192.0], [2.5, 192.0], [2.6, 192.0], [2.7, 192.0], [2.8, 192.0], [2.9, 192.0], [3.0, 194.0], [3.1, 194.0], [3.2, 194.0], [3.3, 194.0], [3.4, 194.0], [3.5, 194.0], [3.6, 194.0], [3.7, 194.0], [3.8, 194.0], [3.9, 194.0], [4.0, 194.0], [4.1, 194.0], [4.2, 194.0], [4.3, 194.0], [4.4, 194.0], [4.5, 194.0], [4.6, 194.0], [4.7, 194.0], [4.8, 194.0], [4.9, 194.0], [5.0, 195.0], [5.1, 195.0], [5.2, 195.0], [5.3, 195.0], [5.4, 195.0], [5.5, 195.0], [5.6, 195.0], [5.7, 195.0], [5.8, 195.0], [5.9, 195.0], [6.0, 196.0], [6.1, 196.0], [6.2, 196.0], [6.3, 196.0], [6.4, 196.0], [6.5, 196.0], [6.6, 196.0], [6.7, 196.0], [6.8, 196.0], [6.9, 196.0], [7.0, 197.0], [7.1, 197.0], [7.2, 197.0], [7.3, 197.0], [7.4, 197.0], [7.5, 197.0], [7.6, 197.0], [7.7, 197.0], [7.8, 197.0], [7.9, 197.0], [8.0, 197.0], [8.1, 197.0], [8.2, 197.0], [8.3, 197.0], [8.4, 197.0], [8.5, 197.0], [8.6, 197.0], [8.7, 197.0], [8.8, 197.0], [8.9, 197.0], [9.0, 198.0], [9.1, 198.0], [9.2, 198.0], [9.3, 198.0], [9.4, 198.0], [9.5, 198.0], [9.6, 198.0], [9.7, 198.0], [9.8, 198.0], [9.9, 198.0], [10.0, 199.0], [10.1, 199.0], [10.2, 199.0], [10.3, 199.0], [10.4, 199.0], [10.5, 199.0], [10.6, 199.0], [10.7, 199.0], [10.8, 199.0], [10.9, 199.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 199.0], [11.6, 199.0], [11.7, 199.0], [11.8, 199.0], [11.9, 199.0], [12.0, 199.0], [12.1, 199.0], [12.2, 199.0], [12.3, 199.0], [12.4, 199.0], [12.5, 199.0], [12.6, 199.0], [12.7, 199.0], [12.8, 199.0], [12.9, 199.0], [13.0, 199.0], [13.1, 199.0], [13.2, 199.0], [13.3, 199.0], [13.4, 199.0], [13.5, 199.0], [13.6, 199.0], [13.7, 199.0], [13.8, 199.0], [13.9, 199.0], [14.0, 201.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 201.0], [14.5, 201.0], [14.6, 201.0], [14.7, 201.0], [14.8, 201.0], [14.9, 201.0], [15.0, 201.0], [15.1, 201.0], [15.2, 201.0], [15.3, 201.0], [15.4, 201.0], [15.5, 201.0], [15.6, 201.0], [15.7, 201.0], [15.8, 201.0], [15.9, 201.0], [16.0, 202.0], [16.1, 202.0], [16.2, 202.0], [16.3, 202.0], [16.4, 202.0], [16.5, 202.0], [16.6, 202.0], [16.7, 202.0], [16.8, 202.0], [16.9, 202.0], [17.0, 204.0], [17.1, 204.0], [17.2, 204.0], [17.3, 204.0], [17.4, 204.0], [17.5, 204.0], [17.6, 204.0], [17.7, 204.0], [17.8, 204.0], [17.9, 204.0], [18.0, 204.0], [18.1, 204.0], [18.2, 204.0], [18.3, 204.0], [18.4, 204.0], [18.5, 204.0], [18.6, 204.0], [18.7, 204.0], [18.8, 204.0], [18.9, 204.0], [19.0, 204.0], [19.1, 204.0], [19.2, 204.0], [19.3, 204.0], [19.4, 204.0], [19.5, 204.0], [19.6, 204.0], [19.7, 204.0], [19.8, 204.0], [19.9, 204.0], [20.0, 223.0], [20.1, 223.0], [20.2, 223.0], [20.3, 223.0], [20.4, 223.0], [20.5, 223.0], [20.6, 223.0], [20.7, 223.0], [20.8, 223.0], [20.9, 223.0], [21.0, 226.0], [21.1, 226.0], [21.2, 226.0], [21.3, 226.0], [21.4, 226.0], [21.5, 226.0], [21.6, 226.0], [21.7, 226.0], [21.8, 226.0], [21.9, 226.0], [22.0, 229.0], [22.1, 229.0], [22.2, 229.0], [22.3, 229.0], [22.4, 229.0], [22.5, 229.0], [22.6, 229.0], [22.7, 229.0], [22.8, 229.0], [22.9, 229.0], [23.0, 230.0], [23.1, 230.0], [23.2, 230.0], [23.3, 230.0], [23.4, 230.0], [23.5, 230.0], [23.6, 230.0], [23.7, 230.0], [23.8, 230.0], [23.9, 230.0], [24.0, 233.0], [24.1, 233.0], [24.2, 233.0], [24.3, 233.0], [24.4, 233.0], [24.5, 233.0], [24.6, 233.0], [24.7, 233.0], [24.8, 233.0], [24.9, 233.0], [25.0, 233.0], [25.1, 233.0], [25.2, 233.0], [25.3, 233.0], [25.4, 233.0], [25.5, 233.0], [25.6, 233.0], [25.7, 233.0], [25.8, 233.0], [25.9, 233.0], [26.0, 235.0], [26.1, 235.0], [26.2, 235.0], [26.3, 235.0], [26.4, 235.0], [26.5, 235.0], [26.6, 235.0], [26.7, 235.0], [26.8, 235.0], [26.9, 235.0], [27.0, 237.0], [27.1, 237.0], [27.2, 237.0], [27.3, 237.0], [27.4, 237.0], [27.5, 237.0], [27.6, 237.0], [27.7, 237.0], [27.8, 237.0], [27.9, 237.0], [28.0, 237.0], [28.1, 237.0], [28.2, 237.0], [28.3, 237.0], [28.4, 237.0], [28.5, 237.0], [28.6, 237.0], [28.7, 237.0], [28.8, 237.0], [28.9, 237.0], [29.0, 241.0], [29.1, 241.0], [29.2, 241.0], [29.3, 241.0], [29.4, 241.0], [29.5, 241.0], [29.6, 241.0], [29.7, 241.0], [29.8, 241.0], [29.9, 241.0], [30.0, 242.0], [30.1, 242.0], [30.2, 242.0], [30.3, 242.0], [30.4, 242.0], [30.5, 242.0], [30.6, 242.0], [30.7, 242.0], [30.8, 242.0], [30.9, 242.0], [31.0, 245.0], [31.1, 245.0], [31.2, 245.0], [31.3, 245.0], [31.4, 245.0], [31.5, 245.0], [31.6, 245.0], [31.7, 245.0], [31.8, 245.0], [31.9, 245.0], [32.0, 245.0], [32.1, 245.0], [32.2, 245.0], [32.3, 245.0], [32.4, 245.0], [32.5, 245.0], [32.6, 245.0], [32.7, 245.0], [32.8, 245.0], [32.9, 245.0], [33.0, 252.0], [33.1, 252.0], [33.2, 252.0], [33.3, 252.0], [33.4, 252.0], [33.5, 252.0], [33.6, 252.0], [33.7, 252.0], [33.8, 252.0], [33.9, 252.0], [34.0, 253.0], [34.1, 253.0], [34.2, 253.0], [34.3, 253.0], [34.4, 253.0], [34.5, 253.0], [34.6, 253.0], [34.7, 253.0], [34.8, 253.0], [34.9, 253.0], [35.0, 254.0], [35.1, 254.0], [35.2, 254.0], [35.3, 254.0], [35.4, 254.0], [35.5, 254.0], [35.6, 254.0], [35.7, 254.0], [35.8, 254.0], [35.9, 254.0], [36.0, 266.0], [36.1, 266.0], [36.2, 266.0], [36.3, 266.0], [36.4, 266.0], [36.5, 266.0], [36.6, 266.0], [36.7, 266.0], [36.8, 266.0], [36.9, 266.0], [37.0, 272.0], [37.1, 272.0], [37.2, 272.0], [37.3, 272.0], [37.4, 272.0], [37.5, 272.0], [37.6, 272.0], [37.7, 272.0], [37.8, 272.0], [37.9, 272.0], [38.0, 278.0], [38.1, 278.0], [38.2, 278.0], [38.3, 278.0], [38.4, 278.0], [38.5, 278.0], [38.6, 278.0], [38.7, 278.0], [38.8, 278.0], [38.9, 278.0], [39.0, 280.0], [39.1, 280.0], [39.2, 280.0], [39.3, 280.0], [39.4, 280.0], [39.5, 280.0], [39.6, 280.0], [39.7, 280.0], [39.8, 280.0], [39.9, 280.0], [40.0, 282.0], [40.1, 282.0], [40.2, 282.0], [40.3, 282.0], [40.4, 282.0], [40.5, 282.0], [40.6, 282.0], [40.7, 282.0], [40.8, 282.0], [40.9, 282.0], [41.0, 282.0], [41.1, 282.0], [41.2, 282.0], [41.3, 282.0], [41.4, 282.0], [41.5, 282.0], [41.6, 282.0], [41.7, 282.0], [41.8, 282.0], [41.9, 282.0], [42.0, 284.0], [42.1, 284.0], [42.2, 284.0], [42.3, 284.0], [42.4, 284.0], [42.5, 284.0], [42.6, 284.0], [42.7, 284.0], [42.8, 284.0], [42.9, 284.0], [43.0, 284.0], [43.1, 284.0], [43.2, 284.0], [43.3, 284.0], [43.4, 284.0], [43.5, 284.0], [43.6, 284.0], [43.7, 284.0], [43.8, 284.0], [43.9, 284.0], [44.0, 285.0], [44.1, 285.0], [44.2, 285.0], [44.3, 285.0], [44.4, 285.0], [44.5, 285.0], [44.6, 285.0], [44.7, 285.0], [44.8, 285.0], [44.9, 285.0], [45.0, 289.0], [45.1, 289.0], [45.2, 289.0], [45.3, 289.0], [45.4, 289.0], [45.5, 289.0], [45.6, 289.0], [45.7, 289.0], [45.8, 289.0], [45.9, 289.0], [46.0, 290.0], [46.1, 290.0], [46.2, 290.0], [46.3, 290.0], [46.4, 290.0], [46.5, 290.0], [46.6, 290.0], [46.7, 290.0], [46.8, 290.0], [46.9, 290.0], [47.0, 291.0], [47.1, 291.0], [47.2, 291.0], [47.3, 291.0], [47.4, 291.0], [47.5, 291.0], [47.6, 291.0], [47.7, 291.0], [47.8, 291.0], [47.9, 291.0], [48.0, 295.0], [48.1, 295.0], [48.2, 295.0], [48.3, 295.0], [48.4, 295.0], [48.5, 295.0], [48.6, 295.0], [48.7, 295.0], [48.8, 295.0], [48.9, 295.0], [49.0, 296.0], [49.1, 296.0], [49.2, 296.0], [49.3, 296.0], [49.4, 296.0], [49.5, 296.0], [49.6, 296.0], [49.7, 296.0], [49.8, 296.0], [49.9, 296.0], [50.0, 559.0], [50.1, 559.0], [50.2, 559.0], [50.3, 559.0], [50.4, 559.0], [50.5, 559.0], [50.6, 559.0], [50.7, 559.0], [50.8, 559.0], [50.9, 559.0], [51.0, 562.0], [51.1, 562.0], [51.2, 562.0], [51.3, 562.0], [51.4, 562.0], [51.5, 562.0], [51.6, 562.0], [51.7, 562.0], [51.8, 562.0], [51.9, 562.0], [52.0, 565.0], [52.1, 565.0], [52.2, 565.0], [52.3, 565.0], [52.4, 565.0], [52.5, 565.0], [52.6, 565.0], [52.7, 565.0], [52.8, 565.0], [52.9, 565.0], [53.0, 568.0], [53.1, 568.0], [53.2, 568.0], [53.3, 568.0], [53.4, 568.0], [53.5, 568.0], [53.6, 568.0], [53.7, 568.0], [53.8, 568.0], [53.9, 568.0], [54.0, 569.0], [54.1, 569.0], [54.2, 569.0], [54.3, 569.0], [54.4, 569.0], [54.5, 569.0], [54.6, 569.0], [54.7, 569.0], [54.8, 569.0], [54.9, 569.0], [55.0, 573.0], [55.1, 573.0], [55.2, 573.0], [55.3, 573.0], [55.4, 573.0], [55.5, 573.0], [55.6, 573.0], [55.7, 573.0], [55.8, 573.0], [55.9, 573.0], [56.0, 573.0], [56.1, 573.0], [56.2, 573.0], [56.3, 573.0], [56.4, 573.0], [56.5, 573.0], [56.6, 573.0], [56.7, 573.0], [56.8, 573.0], [56.9, 573.0], [57.0, 574.0], [57.1, 574.0], [57.2, 574.0], [57.3, 574.0], [57.4, 574.0], [57.5, 574.0], [57.6, 574.0], [57.7, 574.0], [57.8, 574.0], [57.9, 574.0], [58.0, 576.0], [58.1, 576.0], [58.2, 576.0], [58.3, 576.0], [58.4, 576.0], [58.5, 576.0], [58.6, 576.0], [58.7, 576.0], [58.8, 576.0], [58.9, 576.0], [59.0, 578.0], [59.1, 578.0], [59.2, 578.0], [59.3, 578.0], [59.4, 578.0], [59.5, 578.0], [59.6, 578.0], [59.7, 578.0], [59.8, 578.0], [59.9, 578.0], [60.0, 578.0], [60.1, 578.0], [60.2, 578.0], [60.3, 578.0], [60.4, 578.0], [60.5, 578.0], [60.6, 578.0], [60.7, 578.0], [60.8, 578.0], [60.9, 578.0], [61.0, 585.0], [61.1, 585.0], [61.2, 585.0], [61.3, 585.0], [61.4, 585.0], [61.5, 585.0], [61.6, 585.0], [61.7, 585.0], [61.8, 585.0], [61.9, 585.0], [62.0, 590.0], [62.1, 590.0], [62.2, 590.0], [62.3, 590.0], [62.4, 590.0], [62.5, 590.0], [62.6, 590.0], [62.7, 590.0], [62.8, 590.0], [62.9, 590.0], [63.0, 590.0], [63.1, 590.0], [63.2, 590.0], [63.3, 590.0], [63.4, 590.0], [63.5, 590.0], [63.6, 590.0], [63.7, 590.0], [63.8, 590.0], [63.9, 590.0], [64.0, 594.0], [64.1, 594.0], [64.2, 594.0], [64.3, 594.0], [64.4, 594.0], [64.5, 594.0], [64.6, 594.0], [64.7, 594.0], [64.8, 594.0], [64.9, 594.0], [65.0, 595.0], [65.1, 595.0], [65.2, 595.0], [65.3, 595.0], [65.4, 595.0], [65.5, 595.0], [65.6, 595.0], [65.7, 595.0], [65.8, 595.0], [65.9, 595.0], [66.0, 598.0], [66.1, 598.0], [66.2, 598.0], [66.3, 598.0], [66.4, 598.0], [66.5, 598.0], [66.6, 598.0], [66.7, 598.0], [66.8, 598.0], [66.9, 598.0], [67.0, 598.0], [67.1, 598.0], [67.2, 598.0], [67.3, 598.0], [67.4, 598.0], [67.5, 598.0], [67.6, 598.0], [67.7, 598.0], [67.8, 598.0], [67.9, 598.0], [68.0, 604.0], [68.1, 604.0], [68.2, 604.0], [68.3, 604.0], [68.4, 604.0], [68.5, 604.0], [68.6, 604.0], [68.7, 604.0], [68.8, 604.0], [68.9, 604.0], [69.0, 604.0], [69.1, 604.0], [69.2, 604.0], [69.3, 604.0], [69.4, 604.0], [69.5, 604.0], [69.6, 604.0], [69.7, 604.0], [69.8, 604.0], [69.9, 604.0], [70.0, 606.0], [70.1, 606.0], [70.2, 606.0], [70.3, 606.0], [70.4, 606.0], [70.5, 606.0], [70.6, 606.0], [70.7, 606.0], [70.8, 606.0], [70.9, 606.0], [71.0, 606.0], [71.1, 606.0], [71.2, 606.0], [71.3, 606.0], [71.4, 606.0], [71.5, 606.0], [71.6, 606.0], [71.7, 606.0], [71.8, 606.0], [71.9, 606.0], [72.0, 610.0], [72.1, 610.0], [72.2, 610.0], [72.3, 610.0], [72.4, 610.0], [72.5, 610.0], [72.6, 610.0], [72.7, 610.0], [72.8, 610.0], [72.9, 610.0], [73.0, 613.0], [73.1, 613.0], [73.2, 613.0], [73.3, 613.0], [73.4, 613.0], [73.5, 613.0], [73.6, 613.0], [73.7, 613.0], [73.8, 613.0], [73.9, 613.0], [74.0, 614.0], [74.1, 614.0], [74.2, 614.0], [74.3, 614.0], [74.4, 614.0], [74.5, 614.0], [74.6, 614.0], [74.7, 614.0], [74.8, 614.0], [74.9, 614.0], [75.0, 615.0], [75.1, 615.0], [75.2, 615.0], [75.3, 615.0], [75.4, 615.0], [75.5, 615.0], [75.6, 615.0], [75.7, 615.0], [75.8, 615.0], [75.9, 615.0], [76.0, 616.0], [76.1, 616.0], [76.2, 616.0], [76.3, 616.0], [76.4, 616.0], [76.5, 616.0], [76.6, 616.0], [76.7, 616.0], [76.8, 616.0], [76.9, 616.0], [77.0, 617.0], [77.1, 617.0], [77.2, 617.0], [77.3, 617.0], [77.4, 617.0], [77.5, 617.0], [77.6, 617.0], [77.7, 617.0], [77.8, 617.0], [77.9, 617.0], [78.0, 617.0], [78.1, 617.0], [78.2, 617.0], [78.3, 617.0], [78.4, 617.0], [78.5, 617.0], [78.6, 617.0], [78.7, 617.0], [78.8, 617.0], [78.9, 617.0], [79.0, 619.0], [79.1, 619.0], [79.2, 619.0], [79.3, 619.0], [79.4, 619.0], [79.5, 619.0], [79.6, 619.0], [79.7, 619.0], [79.8, 619.0], [79.9, 619.0], [80.0, 624.0], [80.1, 624.0], [80.2, 624.0], [80.3, 624.0], [80.4, 624.0], [80.5, 624.0], [80.6, 624.0], [80.7, 624.0], [80.8, 624.0], [80.9, 624.0], [81.0, 624.0], [81.1, 624.0], [81.2, 624.0], [81.3, 624.0], [81.4, 624.0], [81.5, 624.0], [81.6, 624.0], [81.7, 624.0], [81.8, 624.0], [81.9, 624.0], [82.0, 625.0], [82.1, 625.0], [82.2, 625.0], [82.3, 625.0], [82.4, 625.0], [82.5, 625.0], [82.6, 625.0], [82.7, 625.0], [82.8, 625.0], [82.9, 625.0], [83.0, 637.0], [83.1, 637.0], [83.2, 637.0], [83.3, 637.0], [83.4, 637.0], [83.5, 637.0], [83.6, 637.0], [83.7, 637.0], [83.8, 637.0], [83.9, 637.0], [84.0, 639.0], [84.1, 639.0], [84.2, 639.0], [84.3, 639.0], [84.4, 639.0], [84.5, 639.0], [84.6, 639.0], [84.7, 639.0], [84.8, 639.0], [84.9, 639.0], [85.0, 643.0], [85.1, 643.0], [85.2, 643.0], [85.3, 643.0], [85.4, 643.0], [85.5, 643.0], [85.6, 643.0], [85.7, 643.0], [85.8, 643.0], [85.9, 643.0], [86.0, 645.0], [86.1, 645.0], [86.2, 645.0], [86.3, 645.0], [86.4, 645.0], [86.5, 645.0], [86.6, 645.0], [86.7, 645.0], [86.8, 645.0], [86.9, 645.0], [87.0, 649.0], [87.1, 649.0], [87.2, 649.0], [87.3, 649.0], [87.4, 649.0], [87.5, 649.0], [87.6, 649.0], [87.7, 649.0], [87.8, 649.0], [87.9, 649.0], [88.0, 658.0], [88.1, 658.0], [88.2, 658.0], [88.3, 658.0], [88.4, 658.0], [88.5, 658.0], [88.6, 658.0], [88.7, 658.0], [88.8, 658.0], [88.9, 658.0], [89.0, 665.0], [89.1, 665.0], [89.2, 665.0], [89.3, 665.0], [89.4, 665.0], [89.5, 665.0], [89.6, 665.0], [89.7, 665.0], [89.8, 665.0], [89.9, 665.0], [90.0, 673.0], [90.1, 673.0], [90.2, 673.0], [90.3, 673.0], [90.4, 673.0], [90.5, 673.0], [90.6, 673.0], [90.7, 673.0], [90.8, 673.0], [90.9, 673.0], [91.0, 673.0], [91.1, 673.0], [91.2, 673.0], [91.3, 673.0], [91.4, 673.0], [91.5, 673.0], [91.6, 673.0], [91.7, 673.0], [91.8, 673.0], [91.9, 673.0], [92.0, 675.0], [92.1, 675.0], [92.2, 675.0], [92.3, 675.0], [92.4, 675.0], [92.5, 675.0], [92.6, 675.0], [92.7, 675.0], [92.8, 675.0], [92.9, 675.0], [93.0, 679.0], [93.1, 679.0], [93.2, 679.0], [93.3, 679.0], [93.4, 679.0], [93.5, 679.0], [93.6, 679.0], [93.7, 679.0], [93.8, 679.0], [93.9, 679.0], [94.0, 681.0], [94.1, 681.0], [94.2, 681.0], [94.3, 681.0], [94.4, 681.0], [94.5, 681.0], [94.6, 681.0], [94.7, 681.0], [94.8, 681.0], [94.9, 681.0], [95.0, 687.0], [95.1, 687.0], [95.2, 687.0], [95.3, 687.0], [95.4, 687.0], [95.5, 687.0], [95.6, 687.0], [95.7, 687.0], [95.8, 687.0], [95.9, 687.0], [96.0, 703.0], [96.1, 703.0], [96.2, 703.0], [96.3, 703.0], [96.4, 703.0], [96.5, 703.0], [96.6, 703.0], [96.7, 703.0], [96.8, 703.0], [96.9, 703.0], [97.0, 711.0], [97.1, 711.0], [97.2, 711.0], [97.3, 711.0], [97.4, 711.0], [97.5, 711.0], [97.6, 711.0], [97.7, 711.0], [97.8, 711.0], [97.9, 711.0], [98.0, 818.0], [98.1, 818.0], [98.2, 818.0], [98.3, 818.0], [98.4, 818.0], [98.5, 818.0], [98.6, 818.0], [98.7, 818.0], [98.8, 818.0], [98.9, 818.0], [99.0, 1217.0], [99.1, 1217.0], [99.2, 1217.0], [99.3, 1217.0], [99.4, 1217.0], [99.5, 1217.0], [99.6, 1217.0], [99.7, 1217.0], [99.8, 1217.0], [99.9, 1217.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 36.0, "series": [{"data": [[600.0, 28.0], [1200.0, 1.0], [700.0, 2.0], [800.0, 1.0], [200.0, 36.0], [100.0, 14.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.9299999999999993, "minX": 1.7770611E12, "maxY": 2.9299999999999993, "series": [{"data": [[1.7770611E12, 2.9299999999999993]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7770611E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 379.10526315789474, "minX": 1.0, "maxY": 498.32142857142856, "series": [{"data": [[4.0, 379.10526315789474], [2.0, 498.32142857142856], [1.0, 460.5], [5.0, 384.3333333333333], [3.0, 420.9791666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.9299999999999993, 434.37]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 203.33333333333334, "minX": 1.7770611E12, "maxY": 17512.816666666666, "series": [{"data": [[1.7770611E12, 17512.816666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7770611E12, 203.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7770611E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 434.37, "minX": 1.7770611E12, "maxY": 434.37, "series": [{"data": [[1.7770611E12, 434.37]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7770611E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 396.22999999999996, "minX": 1.7770611E12, "maxY": 396.22999999999996, "series": [{"data": [[1.7770611E12, 396.22999999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7770611E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 195.54, "minX": 1.7770611E12, "maxY": 195.54, "series": [{"data": [[1.7770611E12, 195.54]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7770611E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 189.0, "minX": 1.7770611E12, "maxY": 1217.0, "series": [{"data": [[1.7770611E12, 1217.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7770611E12, 672.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7770611E12, 1213.009999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7770611E12, 686.6999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7770611E12, 189.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7770611E12, 427.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7770611E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 588.0, "series": [{"data": [[2.0, 574.5], [1.0, 232.0], [4.0, 588.0], [3.0, 293.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 212.0, "minX": 1.0, "maxY": 560.0, "series": [{"data": [[2.0, 549.5], [1.0, 212.0], [4.0, 560.0], [3.0, 238.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.77706104E12, "maxY": 1.65, "series": [{"data": [[1.77706104E12, 0.016666666666666666], [1.7770611E12, 1.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7770611E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7770611E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7770611E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7770611E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7770611E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7770611E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7770611E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7770611E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7770611E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7770611E12, "title": "Total Transactions Per Second"}},
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

