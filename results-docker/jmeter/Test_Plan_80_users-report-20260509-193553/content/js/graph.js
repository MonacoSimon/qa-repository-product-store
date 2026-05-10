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
        data: {"result": {"minY": 145.0, "minX": 0.0, "maxY": 1586.0, "series": [{"data": [[0.0, 145.0], [0.1, 145.0], [0.2, 145.0], [0.3, 145.0], [0.4, 145.0], [0.5, 145.0], [0.6, 145.0], [0.7, 150.0], [0.8, 150.0], [0.9, 150.0], [1.0, 150.0], [1.1, 150.0], [1.2, 150.0], [1.3, 151.0], [1.4, 151.0], [1.5, 151.0], [1.6, 151.0], [1.7, 151.0], [1.8, 151.0], [1.9, 152.0], [2.0, 152.0], [2.1, 152.0], [2.2, 152.0], [2.3, 152.0], [2.4, 152.0], [2.5, 153.0], [2.6, 153.0], [2.7, 153.0], [2.8, 153.0], [2.9, 153.0], [3.0, 153.0], [3.1, 153.0], [3.2, 153.0], [3.3, 153.0], [3.4, 153.0], [3.5, 153.0], [3.6, 153.0], [3.7, 153.0], [3.8, 154.0], [3.9, 154.0], [4.0, 154.0], [4.1, 154.0], [4.2, 154.0], [4.3, 154.0], [4.4, 155.0], [4.5, 155.0], [4.6, 155.0], [4.7, 155.0], [4.8, 155.0], [4.9, 155.0], [5.0, 156.0], [5.1, 156.0], [5.2, 156.0], [5.3, 156.0], [5.4, 156.0], [5.5, 156.0], [5.6, 156.0], [5.7, 156.0], [5.8, 156.0], [5.9, 156.0], [6.0, 156.0], [6.1, 156.0], [6.2, 156.0], [6.3, 156.0], [6.4, 156.0], [6.5, 156.0], [6.6, 156.0], [6.7, 156.0], [6.8, 156.0], [6.9, 156.0], [7.0, 156.0], [7.1, 156.0], [7.2, 156.0], [7.3, 156.0], [7.4, 156.0], [7.5, 156.0], [7.6, 156.0], [7.7, 156.0], [7.8, 156.0], [7.9, 156.0], [8.0, 156.0], [8.1, 156.0], [8.2, 157.0], [8.3, 157.0], [8.4, 157.0], [8.5, 157.0], [8.6, 157.0], [8.7, 157.0], [8.8, 157.0], [8.9, 157.0], [9.0, 157.0], [9.1, 157.0], [9.2, 157.0], [9.3, 157.0], [9.4, 158.0], [9.5, 158.0], [9.6, 158.0], [9.7, 158.0], [9.8, 158.0], [9.9, 158.0], [10.0, 158.0], [10.1, 158.0], [10.2, 158.0], [10.3, 158.0], [10.4, 158.0], [10.5, 158.0], [10.6, 158.0], [10.7, 158.0], [10.8, 158.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 158.0], [11.3, 159.0], [11.4, 159.0], [11.5, 159.0], [11.6, 159.0], [11.7, 159.0], [11.8, 159.0], [11.9, 159.0], [12.0, 159.0], [12.1, 159.0], [12.2, 159.0], [12.3, 159.0], [12.4, 159.0], [12.5, 160.0], [12.6, 160.0], [12.7, 160.0], [12.8, 160.0], [12.9, 160.0], [13.0, 160.0], [13.1, 160.0], [13.2, 160.0], [13.3, 160.0], [13.4, 160.0], [13.5, 160.0], [13.6, 160.0], [13.7, 160.0], [13.8, 162.0], [13.9, 162.0], [14.0, 162.0], [14.1, 162.0], [14.2, 162.0], [14.3, 162.0], [14.4, 162.0], [14.5, 162.0], [14.6, 162.0], [14.7, 162.0], [14.8, 162.0], [14.9, 162.0], [15.0, 164.0], [15.1, 164.0], [15.2, 164.0], [15.3, 164.0], [15.4, 164.0], [15.5, 164.0], [15.6, 164.0], [15.7, 166.0], [15.8, 166.0], [15.9, 166.0], [16.0, 166.0], [16.1, 166.0], [16.2, 166.0], [16.3, 166.0], [16.4, 166.0], [16.5, 166.0], [16.6, 166.0], [16.7, 166.0], [16.8, 166.0], [16.9, 167.0], [17.0, 167.0], [17.1, 167.0], [17.2, 167.0], [17.3, 167.0], [17.4, 167.0], [17.5, 169.0], [17.6, 169.0], [17.7, 169.0], [17.8, 169.0], [17.9, 169.0], [18.0, 169.0], [18.1, 169.0], [18.2, 174.0], [18.3, 174.0], [18.4, 174.0], [18.5, 174.0], [18.6, 174.0], [18.7, 174.0], [18.8, 175.0], [18.9, 175.0], [19.0, 175.0], [19.1, 175.0], [19.2, 175.0], [19.3, 175.0], [19.4, 178.0], [19.5, 178.0], [19.6, 178.0], [19.7, 178.0], [19.8, 178.0], [19.9, 178.0], [20.0, 184.0], [20.1, 184.0], [20.2, 184.0], [20.3, 184.0], [20.4, 184.0], [20.5, 184.0], [20.6, 184.0], [20.7, 187.0], [20.8, 187.0], [20.9, 187.0], [21.0, 187.0], [21.1, 187.0], [21.2, 187.0], [21.3, 190.0], [21.4, 190.0], [21.5, 190.0], [21.6, 190.0], [21.7, 190.0], [21.8, 190.0], [21.9, 191.0], [22.0, 191.0], [22.1, 191.0], [22.2, 191.0], [22.3, 191.0], [22.4, 191.0], [22.5, 195.0], [22.6, 195.0], [22.7, 195.0], [22.8, 195.0], [22.9, 195.0], [23.0, 195.0], [23.1, 195.0], [23.2, 195.0], [23.3, 195.0], [23.4, 195.0], [23.5, 195.0], [23.6, 195.0], [23.7, 195.0], [23.8, 197.0], [23.9, 197.0], [24.0, 197.0], [24.1, 197.0], [24.2, 197.0], [24.3, 197.0], [24.4, 197.0], [24.5, 197.0], [24.6, 197.0], [24.7, 197.0], [24.8, 197.0], [24.9, 197.0], [25.0, 198.0], [25.1, 198.0], [25.2, 198.0], [25.3, 198.0], [25.4, 198.0], [25.5, 198.0], [25.6, 198.0], [25.7, 198.0], [25.8, 198.0], [25.9, 198.0], [26.0, 198.0], [26.1, 198.0], [26.2, 198.0], [26.3, 198.0], [26.4, 198.0], [26.5, 198.0], [26.6, 198.0], [26.7, 198.0], [26.8, 198.0], [26.9, 198.0], [27.0, 198.0], [27.1, 198.0], [27.2, 198.0], [27.3, 198.0], [27.4, 198.0], [27.5, 199.0], [27.6, 199.0], [27.7, 199.0], [27.8, 199.0], [27.9, 199.0], [28.0, 199.0], [28.1, 199.0], [28.2, 199.0], [28.3, 199.0], [28.4, 199.0], [28.5, 199.0], [28.6, 199.0], [28.7, 199.0], [28.8, 199.0], [28.9, 199.0], [29.0, 199.0], [29.1, 199.0], [29.2, 199.0], [29.3, 199.0], [29.4, 199.0], [29.5, 199.0], [29.6, 199.0], [29.7, 199.0], [29.8, 199.0], [29.9, 199.0], [30.0, 200.0], [30.1, 200.0], [30.2, 200.0], [30.3, 200.0], [30.4, 200.0], [30.5, 200.0], [30.6, 200.0], [30.7, 201.0], [30.8, 201.0], [30.9, 201.0], [31.0, 201.0], [31.1, 201.0], [31.2, 201.0], [31.3, 201.0], [31.4, 201.0], [31.5, 201.0], [31.6, 201.0], [31.7, 201.0], [31.8, 201.0], [31.9, 202.0], [32.0, 202.0], [32.1, 202.0], [32.2, 202.0], [32.3, 202.0], [32.4, 202.0], [32.5, 202.0], [32.6, 202.0], [32.7, 202.0], [32.8, 202.0], [32.9, 202.0], [33.0, 202.0], [33.1, 202.0], [33.2, 203.0], [33.3, 203.0], [33.4, 203.0], [33.5, 203.0], [33.6, 203.0], [33.7, 203.0], [33.8, 204.0], [33.9, 204.0], [34.0, 204.0], [34.1, 204.0], [34.2, 204.0], [34.3, 204.0], [34.4, 204.0], [34.5, 204.0], [34.6, 204.0], [34.7, 204.0], [34.8, 204.0], [34.9, 204.0], [35.0, 204.0], [35.1, 204.0], [35.2, 204.0], [35.3, 204.0], [35.4, 204.0], [35.5, 204.0], [35.6, 204.0], [35.7, 210.0], [35.8, 210.0], [35.9, 210.0], [36.0, 210.0], [36.1, 210.0], [36.2, 210.0], [36.3, 213.0], [36.4, 213.0], [36.5, 213.0], [36.6, 213.0], [36.7, 213.0], [36.8, 213.0], [36.9, 217.0], [37.0, 217.0], [37.1, 217.0], [37.2, 217.0], [37.3, 217.0], [37.4, 217.0], [37.5, 229.0], [37.6, 229.0], [37.7, 229.0], [37.8, 229.0], [37.9, 229.0], [38.0, 229.0], [38.1, 229.0], [38.2, 232.0], [38.3, 232.0], [38.4, 232.0], [38.5, 232.0], [38.6, 232.0], [38.7, 232.0], [38.8, 234.0], [38.9, 234.0], [39.0, 234.0], [39.1, 234.0], [39.2, 234.0], [39.3, 234.0], [39.4, 237.0], [39.5, 237.0], [39.6, 237.0], [39.7, 237.0], [39.8, 237.0], [39.9, 237.0], [40.0, 237.0], [40.1, 237.0], [40.2, 237.0], [40.3, 237.0], [40.4, 237.0], [40.5, 237.0], [40.6, 237.0], [40.7, 240.0], [40.8, 240.0], [40.9, 240.0], [41.0, 240.0], [41.1, 240.0], [41.2, 240.0], [41.3, 244.0], [41.4, 244.0], [41.5, 244.0], [41.6, 244.0], [41.7, 244.0], [41.8, 244.0], [41.9, 247.0], [42.0, 247.0], [42.1, 247.0], [42.2, 247.0], [42.3, 247.0], [42.4, 247.0], [42.5, 268.0], [42.6, 268.0], [42.7, 268.0], [42.8, 268.0], [42.9, 268.0], [43.0, 268.0], [43.1, 268.0], [43.2, 279.0], [43.3, 279.0], [43.4, 279.0], [43.5, 279.0], [43.6, 279.0], [43.7, 279.0], [43.8, 288.0], [43.9, 288.0], [44.0, 288.0], [44.1, 288.0], [44.2, 288.0], [44.3, 288.0], [44.4, 292.0], [44.5, 292.0], [44.6, 292.0], [44.7, 292.0], [44.8, 292.0], [44.9, 292.0], [45.0, 294.0], [45.1, 294.0], [45.2, 294.0], [45.3, 294.0], [45.4, 294.0], [45.5, 294.0], [45.6, 294.0], [45.7, 314.0], [45.8, 314.0], [45.9, 314.0], [46.0, 314.0], [46.1, 314.0], [46.2, 314.0], [46.3, 316.0], [46.4, 316.0], [46.5, 316.0], [46.6, 316.0], [46.7, 316.0], [46.8, 316.0], [46.9, 317.0], [47.0, 317.0], [47.1, 317.0], [47.2, 317.0], [47.3, 317.0], [47.4, 317.0], [47.5, 320.0], [47.6, 320.0], [47.7, 320.0], [47.8, 320.0], [47.9, 320.0], [48.0, 320.0], [48.1, 320.0], [48.2, 412.0], [48.3, 412.0], [48.4, 412.0], [48.5, 412.0], [48.6, 412.0], [48.7, 412.0], [48.8, 462.0], [48.9, 462.0], [49.0, 462.0], [49.1, 462.0], [49.2, 462.0], [49.3, 462.0], [49.4, 464.0], [49.5, 464.0], [49.6, 464.0], [49.7, 464.0], [49.8, 464.0], [49.9, 464.0], [50.0, 465.0], [50.1, 465.0], [50.2, 465.0], [50.3, 465.0], [50.4, 465.0], [50.5, 465.0], [50.6, 465.0], [50.7, 469.0], [50.8, 469.0], [50.9, 469.0], [51.0, 469.0], [51.1, 469.0], [51.2, 469.0], [51.3, 475.0], [51.4, 475.0], [51.5, 475.0], [51.6, 475.0], [51.7, 475.0], [51.8, 475.0], [51.9, 476.0], [52.0, 476.0], [52.1, 476.0], [52.2, 476.0], [52.3, 476.0], [52.4, 476.0], [52.5, 476.0], [52.6, 476.0], [52.7, 476.0], [52.8, 476.0], [52.9, 476.0], [53.0, 476.0], [53.1, 476.0], [53.2, 477.0], [53.3, 477.0], [53.4, 477.0], [53.5, 477.0], [53.6, 477.0], [53.7, 477.0], [53.8, 481.0], [53.9, 481.0], [54.0, 481.0], [54.1, 481.0], [54.2, 481.0], [54.3, 481.0], [54.4, 481.0], [54.5, 481.0], [54.6, 481.0], [54.7, 481.0], [54.8, 481.0], [54.9, 481.0], [55.0, 482.0], [55.1, 482.0], [55.2, 482.0], [55.3, 482.0], [55.4, 482.0], [55.5, 482.0], [55.6, 482.0], [55.7, 482.0], [55.8, 482.0], [55.9, 482.0], [56.0, 482.0], [56.1, 482.0], [56.2, 482.0], [56.3, 482.0], [56.4, 482.0], [56.5, 482.0], [56.6, 482.0], [56.7, 482.0], [56.8, 482.0], [56.9, 485.0], [57.0, 485.0], [57.1, 485.0], [57.2, 485.0], [57.3, 485.0], [57.4, 485.0], [57.5, 488.0], [57.6, 488.0], [57.7, 488.0], [57.8, 488.0], [57.9, 488.0], [58.0, 488.0], [58.1, 488.0], [58.2, 491.0], [58.3, 491.0], [58.4, 491.0], [58.5, 491.0], [58.6, 491.0], [58.7, 491.0], [58.8, 491.0], [58.9, 491.0], [59.0, 491.0], [59.1, 491.0], [59.2, 491.0], [59.3, 491.0], [59.4, 496.0], [59.5, 496.0], [59.6, 496.0], [59.7, 496.0], [59.8, 496.0], [59.9, 496.0], [60.0, 497.0], [60.1, 497.0], [60.2, 497.0], [60.3, 497.0], [60.4, 497.0], [60.5, 497.0], [60.6, 497.0], [60.7, 498.0], [60.8, 498.0], [60.9, 498.0], [61.0, 498.0], [61.1, 498.0], [61.2, 498.0], [61.3, 499.0], [61.4, 499.0], [61.5, 499.0], [61.6, 499.0], [61.7, 499.0], [61.8, 499.0], [61.9, 500.0], [62.0, 500.0], [62.1, 500.0], [62.2, 500.0], [62.3, 500.0], [62.4, 500.0], [62.5, 504.0], [62.6, 504.0], [62.7, 504.0], [62.8, 504.0], [62.9, 504.0], [63.0, 504.0], [63.1, 504.0], [63.2, 505.0], [63.3, 505.0], [63.4, 505.0], [63.5, 505.0], [63.6, 505.0], [63.7, 505.0], [63.8, 505.0], [63.9, 505.0], [64.0, 505.0], [64.1, 505.0], [64.2, 505.0], [64.3, 505.0], [64.4, 508.0], [64.5, 508.0], [64.6, 508.0], [64.7, 508.0], [64.8, 508.0], [64.9, 508.0], [65.0, 514.0], [65.1, 514.0], [65.2, 514.0], [65.3, 514.0], [65.4, 514.0], [65.5, 514.0], [65.6, 514.0], [65.7, 515.0], [65.8, 515.0], [65.9, 515.0], [66.0, 515.0], [66.1, 515.0], [66.2, 515.0], [66.3, 518.0], [66.4, 518.0], [66.5, 518.0], [66.6, 518.0], [66.7, 518.0], [66.8, 518.0], [66.9, 524.0], [67.0, 524.0], [67.1, 524.0], [67.2, 524.0], [67.3, 524.0], [67.4, 524.0], [67.5, 526.0], [67.6, 526.0], [67.7, 526.0], [67.8, 526.0], [67.9, 526.0], [68.0, 526.0], [68.1, 526.0], [68.2, 529.0], [68.3, 529.0], [68.4, 529.0], [68.5, 529.0], [68.6, 529.0], [68.7, 529.0], [68.8, 533.0], [68.9, 533.0], [69.0, 533.0], [69.1, 533.0], [69.2, 533.0], [69.3, 533.0], [69.4, 540.0], [69.5, 540.0], [69.6, 540.0], [69.7, 540.0], [69.8, 540.0], [69.9, 540.0], [70.0, 542.0], [70.1, 542.0], [70.2, 542.0], [70.3, 542.0], [70.4, 542.0], [70.5, 542.0], [70.6, 542.0], [70.7, 546.0], [70.8, 546.0], [70.9, 546.0], [71.0, 546.0], [71.1, 546.0], [71.2, 546.0], [71.3, 546.0], [71.4, 546.0], [71.5, 546.0], [71.6, 546.0], [71.7, 546.0], [71.8, 546.0], [71.9, 548.0], [72.0, 548.0], [72.1, 548.0], [72.2, 548.0], [72.3, 548.0], [72.4, 548.0], [72.5, 555.0], [72.6, 555.0], [72.7, 555.0], [72.8, 555.0], [72.9, 555.0], [73.0, 555.0], [73.1, 555.0], [73.2, 561.0], [73.3, 561.0], [73.4, 561.0], [73.5, 561.0], [73.6, 561.0], [73.7, 561.0], [73.8, 564.0], [73.9, 564.0], [74.0, 564.0], [74.1, 564.0], [74.2, 564.0], [74.3, 564.0], [74.4, 573.0], [74.5, 573.0], [74.6, 573.0], [74.7, 573.0], [74.8, 573.0], [74.9, 573.0], [75.0, 578.0], [75.1, 578.0], [75.2, 578.0], [75.3, 578.0], [75.4, 578.0], [75.5, 578.0], [75.6, 578.0], [75.7, 583.0], [75.8, 583.0], [75.9, 583.0], [76.0, 583.0], [76.1, 583.0], [76.2, 583.0], [76.3, 592.0], [76.4, 592.0], [76.5, 592.0], [76.6, 592.0], [76.7, 592.0], [76.8, 592.0], [76.9, 603.0], [77.0, 603.0], [77.1, 603.0], [77.2, 603.0], [77.3, 603.0], [77.4, 603.0], [77.5, 623.0], [77.6, 623.0], [77.7, 623.0], [77.8, 623.0], [77.9, 623.0], [78.0, 623.0], [78.1, 623.0], [78.2, 625.0], [78.3, 625.0], [78.4, 625.0], [78.5, 625.0], [78.6, 625.0], [78.7, 625.0], [78.8, 625.0], [78.9, 625.0], [79.0, 625.0], [79.1, 625.0], [79.2, 625.0], [79.3, 625.0], [79.4, 628.0], [79.5, 628.0], [79.6, 628.0], [79.7, 628.0], [79.8, 628.0], [79.9, 628.0], [80.0, 636.0], [80.1, 636.0], [80.2, 636.0], [80.3, 636.0], [80.4, 636.0], [80.5, 636.0], [80.6, 636.0], [80.7, 639.0], [80.8, 639.0], [80.9, 639.0], [81.0, 639.0], [81.1, 639.0], [81.2, 639.0], [81.3, 650.0], [81.4, 650.0], [81.5, 650.0], [81.6, 650.0], [81.7, 650.0], [81.8, 650.0], [81.9, 661.0], [82.0, 661.0], [82.1, 661.0], [82.2, 661.0], [82.3, 661.0], [82.4, 661.0], [82.5, 683.0], [82.6, 683.0], [82.7, 683.0], [82.8, 683.0], [82.9, 683.0], [83.0, 683.0], [83.1, 683.0], [83.2, 688.0], [83.3, 688.0], [83.4, 688.0], [83.5, 688.0], [83.6, 688.0], [83.7, 688.0], [83.8, 705.0], [83.9, 705.0], [84.0, 705.0], [84.1, 705.0], [84.2, 705.0], [84.3, 705.0], [84.4, 705.0], [84.5, 705.0], [84.6, 705.0], [84.7, 705.0], [84.8, 705.0], [84.9, 705.0], [85.0, 706.0], [85.1, 706.0], [85.2, 706.0], [85.3, 706.0], [85.4, 706.0], [85.5, 706.0], [85.6, 706.0], [85.7, 709.0], [85.8, 709.0], [85.9, 709.0], [86.0, 709.0], [86.1, 709.0], [86.2, 709.0], [86.3, 768.0], [86.4, 768.0], [86.5, 768.0], [86.6, 768.0], [86.7, 768.0], [86.8, 768.0], [86.9, 776.0], [87.0, 776.0], [87.1, 776.0], [87.2, 776.0], [87.3, 776.0], [87.4, 776.0], [87.5, 777.0], [87.6, 777.0], [87.7, 777.0], [87.8, 777.0], [87.9, 777.0], [88.0, 777.0], [88.1, 777.0], [88.2, 813.0], [88.3, 813.0], [88.4, 813.0], [88.5, 813.0], [88.6, 813.0], [88.7, 813.0], [88.8, 814.0], [88.9, 814.0], [89.0, 814.0], [89.1, 814.0], [89.2, 814.0], [89.3, 814.0], [89.4, 829.0], [89.5, 829.0], [89.6, 829.0], [89.7, 829.0], [89.8, 829.0], [89.9, 829.0], [90.0, 835.0], [90.1, 835.0], [90.2, 835.0], [90.3, 835.0], [90.4, 835.0], [90.5, 835.0], [90.6, 835.0], [90.7, 956.0], [90.8, 956.0], [90.9, 956.0], [91.0, 956.0], [91.1, 956.0], [91.2, 956.0], [91.3, 1042.0], [91.4, 1042.0], [91.5, 1042.0], [91.6, 1042.0], [91.7, 1042.0], [91.8, 1042.0], [91.9, 1043.0], [92.0, 1043.0], [92.1, 1043.0], [92.2, 1043.0], [92.3, 1043.0], [92.4, 1043.0], [92.5, 1096.0], [92.6, 1096.0], [92.7, 1096.0], [92.8, 1096.0], [92.9, 1096.0], [93.0, 1096.0], [93.1, 1096.0], [93.2, 1098.0], [93.3, 1098.0], [93.4, 1098.0], [93.5, 1098.0], [93.6, 1098.0], [93.7, 1098.0], [93.8, 1122.0], [93.9, 1122.0], [94.0, 1122.0], [94.1, 1122.0], [94.2, 1122.0], [94.3, 1122.0], [94.4, 1158.0], [94.5, 1158.0], [94.6, 1158.0], [94.7, 1158.0], [94.8, 1158.0], [94.9, 1158.0], [95.0, 1196.0], [95.1, 1196.0], [95.2, 1196.0], [95.3, 1196.0], [95.4, 1196.0], [95.5, 1196.0], [95.6, 1196.0], [95.7, 1205.0], [95.8, 1205.0], [95.9, 1205.0], [96.0, 1205.0], [96.1, 1205.0], [96.2, 1205.0], [96.3, 1253.0], [96.4, 1253.0], [96.5, 1253.0], [96.6, 1253.0], [96.7, 1253.0], [96.8, 1253.0], [96.9, 1267.0], [97.0, 1267.0], [97.1, 1267.0], [97.2, 1267.0], [97.3, 1267.0], [97.4, 1267.0], [97.5, 1268.0], [97.6, 1268.0], [97.7, 1268.0], [97.8, 1268.0], [97.9, 1268.0], [98.0, 1268.0], [98.1, 1268.0], [98.2, 1282.0], [98.3, 1282.0], [98.4, 1282.0], [98.5, 1282.0], [98.6, 1282.0], [98.7, 1282.0], [98.8, 1518.0], [98.9, 1518.0], [99.0, 1518.0], [99.1, 1518.0], [99.2, 1518.0], [99.3, 1518.0], [99.4, 1586.0], [99.5, 1586.0], [99.6, 1586.0], [99.7, 1586.0], [99.8, 1586.0], [99.9, 1586.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 48.0, "series": [{"data": [[600.0, 11.0], [700.0, 7.0], [200.0, 25.0], [800.0, 4.0], [900.0, 1.0], [1000.0, 4.0], [1100.0, 3.0], [1200.0, 5.0], [300.0, 4.0], [1500.0, 2.0], [100.0, 48.0], [400.0, 22.0], [500.0, 24.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 58.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.7783481E12, "maxY": 4.3227848101265804, "series": [{"data": [[1.77834816E12, 4.3227848101265804], [1.7783481E12, 4.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834816E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 246.5, "minX": 1.0, "maxY": 487.22535211267615, "series": [{"data": [[4.0, 487.22535211267615], [2.0, 246.5], [1.0, 317.5], [5.0, 445.7321428571429], [6.0, 389.9166666666667], [3.0, 429.79999999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.31875, 451.88125]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4.066666666666666, "minX": 1.7783481E12, "maxY": 20050.683333333334, "series": [{"data": [[1.77834816E12, 20050.683333333334], [1.7783481E12, 583.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77834816E12, 321.26666666666665], [1.7783481E12, 4.066666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834816E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 447.088607594937, "minX": 1.7783481E12, "maxY": 830.5, "series": [{"data": [[1.77834816E12, 447.088607594937], [1.7783481E12, 830.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834816E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 422.4493670886075, "minX": 1.7783481E12, "maxY": 782.5, "series": [{"data": [[1.77834816E12, 422.4493670886075], [1.7783481E12, 782.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834816E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 237.19620253164564, "minX": 1.7783481E12, "maxY": 593.0, "series": [{"data": [[1.77834816E12, 237.19620253164564], [1.7783481E12, 593.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834816E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 145.0, "minX": 1.7783481E12, "maxY": 1586.0, "series": [{"data": [[1.77834816E12, 1586.0], [1.7783481E12, 956.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77834816E12, 829.5999999999999], [1.7783481E12, 956.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77834816E12, 1545.8799999999997], [1.7783481E12, 956.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77834816E12, 1196.4499999999998], [1.7783481E12, 956.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77834816E12, 145.0], [1.7783481E12, 705.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77834816E12, 463.0], [1.7783481E12, 830.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 227.0, "minX": 1.0, "maxY": 529.0, "series": [{"data": [[1.0, 529.0], [2.0, 483.5], [4.0, 488.5], [5.0, 317.0], [3.0, 227.0], [6.0, 339.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 199.5, "minX": 1.0, "maxY": 520.0, "series": [{"data": [[1.0, 520.0], [2.0, 471.5], [4.0, 473.0], [5.0, 220.0], [3.0, 199.5], [6.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.7783481E12, "maxY": 2.6, "series": [{"data": [[1.77834816E12, 2.6], [1.7783481E12, 0.06666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834816E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7783481E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.77834816E12, 2.6333333333333333], [1.7783481E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77834816E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7783481E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.77834816E12, 2.6333333333333333], [1.7783481E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834816E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7783481E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.77834816E12, 2.6333333333333333], [1.7783481E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77834816E12, "title": "Total Transactions Per Second"}},
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

