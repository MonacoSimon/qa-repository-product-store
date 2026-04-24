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
        data: {"result": {"minY": 184.0, "minX": 0.0, "maxY": 1457.0, "series": [{"data": [[0.0, 184.0], [0.1, 184.0], [0.2, 184.0], [0.3, 184.0], [0.4, 184.0], [0.5, 184.0], [0.6, 184.0], [0.7, 186.0], [0.8, 186.0], [0.9, 186.0], [1.0, 186.0], [1.1, 186.0], [1.2, 186.0], [1.3, 189.0], [1.4, 189.0], [1.5, 189.0], [1.6, 189.0], [1.7, 189.0], [1.8, 189.0], [1.9, 190.0], [2.0, 190.0], [2.1, 190.0], [2.2, 190.0], [2.3, 190.0], [2.4, 190.0], [2.5, 191.0], [2.6, 191.0], [2.7, 191.0], [2.8, 191.0], [2.9, 191.0], [3.0, 191.0], [3.1, 191.0], [3.2, 192.0], [3.3, 192.0], [3.4, 192.0], [3.5, 192.0], [3.6, 192.0], [3.7, 192.0], [3.8, 193.0], [3.9, 193.0], [4.0, 193.0], [4.1, 193.0], [4.2, 193.0], [4.3, 193.0], [4.4, 193.0], [4.5, 193.0], [4.6, 193.0], [4.7, 193.0], [4.8, 193.0], [4.9, 193.0], [5.0, 194.0], [5.1, 194.0], [5.2, 194.0], [5.3, 194.0], [5.4, 194.0], [5.5, 194.0], [5.6, 194.0], [5.7, 195.0], [5.8, 195.0], [5.9, 195.0], [6.0, 195.0], [6.1, 195.0], [6.2, 195.0], [6.3, 196.0], [6.4, 196.0], [6.5, 196.0], [6.6, 196.0], [6.7, 196.0], [6.8, 196.0], [6.9, 196.0], [7.0, 196.0], [7.1, 196.0], [7.2, 196.0], [7.3, 196.0], [7.4, 196.0], [7.5, 196.0], [7.6, 196.0], [7.7, 196.0], [7.8, 196.0], [7.9, 196.0], [8.0, 196.0], [8.1, 196.0], [8.2, 197.0], [8.3, 197.0], [8.4, 197.0], [8.5, 197.0], [8.6, 197.0], [8.7, 197.0], [8.8, 197.0], [8.9, 197.0], [9.0, 197.0], [9.1, 197.0], [9.2, 197.0], [9.3, 197.0], [9.4, 198.0], [9.5, 198.0], [9.6, 198.0], [9.7, 198.0], [9.8, 198.0], [9.9, 198.0], [10.0, 199.0], [10.1, 199.0], [10.2, 199.0], [10.3, 199.0], [10.4, 199.0], [10.5, 199.0], [10.6, 199.0], [10.7, 199.0], [10.8, 199.0], [10.9, 199.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 199.0], [11.6, 199.0], [11.7, 199.0], [11.8, 199.0], [11.9, 201.0], [12.0, 201.0], [12.1, 201.0], [12.2, 201.0], [12.3, 201.0], [12.4, 201.0], [12.5, 201.0], [12.6, 201.0], [12.7, 201.0], [12.8, 201.0], [12.9, 201.0], [13.0, 201.0], [13.1, 201.0], [13.2, 202.0], [13.3, 202.0], [13.4, 202.0], [13.5, 202.0], [13.6, 202.0], [13.7, 202.0], [13.8, 218.0], [13.9, 218.0], [14.0, 218.0], [14.1, 218.0], [14.2, 218.0], [14.3, 218.0], [14.4, 228.0], [14.5, 228.0], [14.6, 228.0], [14.7, 228.0], [14.8, 228.0], [14.9, 228.0], [15.0, 229.0], [15.1, 229.0], [15.2, 229.0], [15.3, 229.0], [15.4, 229.0], [15.5, 229.0], [15.6, 229.0], [15.7, 229.0], [15.8, 229.0], [15.9, 229.0], [16.0, 229.0], [16.1, 229.0], [16.2, 229.0], [16.3, 230.0], [16.4, 230.0], [16.5, 230.0], [16.6, 230.0], [16.7, 230.0], [16.8, 230.0], [16.9, 231.0], [17.0, 231.0], [17.1, 231.0], [17.2, 231.0], [17.3, 231.0], [17.4, 231.0], [17.5, 231.0], [17.6, 231.0], [17.7, 231.0], [17.8, 231.0], [17.9, 231.0], [18.0, 231.0], [18.1, 231.0], [18.2, 233.0], [18.3, 233.0], [18.4, 233.0], [18.5, 233.0], [18.6, 233.0], [18.7, 233.0], [18.8, 234.0], [18.9, 234.0], [19.0, 234.0], [19.1, 234.0], [19.2, 234.0], [19.3, 234.0], [19.4, 234.0], [19.5, 234.0], [19.6, 234.0], [19.7, 234.0], [19.8, 234.0], [19.9, 234.0], [20.0, 235.0], [20.1, 235.0], [20.2, 235.0], [20.3, 235.0], [20.4, 235.0], [20.5, 235.0], [20.6, 235.0], [20.7, 236.0], [20.8, 236.0], [20.9, 236.0], [21.0, 236.0], [21.1, 236.0], [21.2, 236.0], [21.3, 236.0], [21.4, 236.0], [21.5, 236.0], [21.6, 236.0], [21.7, 236.0], [21.8, 236.0], [21.9, 236.0], [22.0, 236.0], [22.1, 236.0], [22.2, 236.0], [22.3, 236.0], [22.4, 236.0], [22.5, 237.0], [22.6, 237.0], [22.7, 237.0], [22.8, 237.0], [22.9, 237.0], [23.0, 237.0], [23.1, 237.0], [23.2, 237.0], [23.3, 237.0], [23.4, 237.0], [23.5, 237.0], [23.6, 237.0], [23.7, 237.0], [23.8, 238.0], [23.9, 238.0], [24.0, 238.0], [24.1, 238.0], [24.2, 238.0], [24.3, 238.0], [24.4, 238.0], [24.5, 238.0], [24.6, 238.0], [24.7, 238.0], [24.8, 238.0], [24.9, 238.0], [25.0, 239.0], [25.1, 239.0], [25.2, 239.0], [25.3, 239.0], [25.4, 239.0], [25.5, 239.0], [25.6, 239.0], [25.7, 239.0], [25.8, 239.0], [25.9, 239.0], [26.0, 239.0], [26.1, 239.0], [26.2, 239.0], [26.3, 240.0], [26.4, 240.0], [26.5, 240.0], [26.6, 240.0], [26.7, 240.0], [26.8, 240.0], [26.9, 240.0], [27.0, 240.0], [27.1, 240.0], [27.2, 240.0], [27.3, 240.0], [27.4, 240.0], [27.5, 241.0], [27.6, 241.0], [27.7, 241.0], [27.8, 241.0], [27.9, 241.0], [28.0, 241.0], [28.1, 241.0], [28.2, 241.0], [28.3, 241.0], [28.4, 241.0], [28.5, 241.0], [28.6, 241.0], [28.7, 241.0], [28.8, 242.0], [28.9, 242.0], [29.0, 242.0], [29.1, 242.0], [29.2, 242.0], [29.3, 242.0], [29.4, 242.0], [29.5, 242.0], [29.6, 242.0], [29.7, 242.0], [29.8, 242.0], [29.9, 242.0], [30.0, 244.0], [30.1, 244.0], [30.2, 244.0], [30.3, 244.0], [30.4, 244.0], [30.5, 244.0], [30.6, 244.0], [30.7, 244.0], [30.8, 244.0], [30.9, 244.0], [31.0, 244.0], [31.1, 244.0], [31.2, 244.0], [31.3, 245.0], [31.4, 245.0], [31.5, 245.0], [31.6, 245.0], [31.7, 245.0], [31.8, 245.0], [31.9, 245.0], [32.0, 245.0], [32.1, 245.0], [32.2, 245.0], [32.3, 245.0], [32.4, 245.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 246.0], [33.1, 246.0], [33.2, 248.0], [33.3, 248.0], [33.4, 248.0], [33.5, 248.0], [33.6, 248.0], [33.7, 248.0], [33.8, 250.0], [33.9, 250.0], [34.0, 250.0], [34.1, 250.0], [34.2, 250.0], [34.3, 250.0], [34.4, 251.0], [34.5, 251.0], [34.6, 251.0], [34.7, 251.0], [34.8, 251.0], [34.9, 251.0], [35.0, 253.0], [35.1, 253.0], [35.2, 253.0], [35.3, 253.0], [35.4, 253.0], [35.5, 253.0], [35.6, 253.0], [35.7, 253.0], [35.8, 253.0], [35.9, 253.0], [36.0, 253.0], [36.1, 253.0], [36.2, 253.0], [36.3, 272.0], [36.4, 272.0], [36.5, 272.0], [36.6, 272.0], [36.7, 272.0], [36.8, 272.0], [36.9, 275.0], [37.0, 275.0], [37.1, 275.0], [37.2, 275.0], [37.3, 275.0], [37.4, 275.0], [37.5, 276.0], [37.6, 276.0], [37.7, 276.0], [37.8, 276.0], [37.9, 276.0], [38.0, 276.0], [38.1, 276.0], [38.2, 277.0], [38.3, 277.0], [38.4, 277.0], [38.5, 277.0], [38.6, 277.0], [38.7, 277.0], [38.8, 277.0], [38.9, 277.0], [39.0, 277.0], [39.1, 277.0], [39.2, 277.0], [39.3, 277.0], [39.4, 280.0], [39.5, 280.0], [39.6, 280.0], [39.7, 280.0], [39.8, 280.0], [39.9, 280.0], [40.0, 280.0], [40.1, 280.0], [40.2, 280.0], [40.3, 280.0], [40.4, 280.0], [40.5, 280.0], [40.6, 280.0], [40.7, 280.0], [40.8, 280.0], [40.9, 280.0], [41.0, 280.0], [41.1, 280.0], [41.2, 280.0], [41.3, 281.0], [41.4, 281.0], [41.5, 281.0], [41.6, 281.0], [41.7, 281.0], [41.8, 281.0], [41.9, 281.0], [42.0, 281.0], [42.1, 281.0], [42.2, 281.0], [42.3, 281.0], [42.4, 281.0], [42.5, 282.0], [42.6, 282.0], [42.7, 282.0], [42.8, 282.0], [42.9, 282.0], [43.0, 282.0], [43.1, 282.0], [43.2, 284.0], [43.3, 284.0], [43.4, 284.0], [43.5, 284.0], [43.6, 284.0], [43.7, 284.0], [43.8, 284.0], [43.9, 284.0], [44.0, 284.0], [44.1, 284.0], [44.2, 284.0], [44.3, 284.0], [44.4, 287.0], [44.5, 287.0], [44.6, 287.0], [44.7, 287.0], [44.8, 287.0], [44.9, 287.0], [45.0, 288.0], [45.1, 288.0], [45.2, 288.0], [45.3, 288.0], [45.4, 288.0], [45.5, 288.0], [45.6, 288.0], [45.7, 290.0], [45.8, 290.0], [45.9, 290.0], [46.0, 290.0], [46.1, 290.0], [46.2, 290.0], [46.3, 291.0], [46.4, 291.0], [46.5, 291.0], [46.6, 291.0], [46.7, 291.0], [46.8, 291.0], [46.9, 291.0], [47.0, 291.0], [47.1, 291.0], [47.2, 291.0], [47.3, 291.0], [47.4, 291.0], [47.5, 293.0], [47.6, 293.0], [47.7, 293.0], [47.8, 293.0], [47.9, 293.0], [48.0, 293.0], [48.1, 293.0], [48.2, 293.0], [48.3, 293.0], [48.4, 293.0], [48.5, 293.0], [48.6, 293.0], [48.7, 293.0], [48.8, 314.0], [48.9, 314.0], [49.0, 314.0], [49.1, 314.0], [49.2, 314.0], [49.3, 314.0], [49.4, 315.0], [49.5, 315.0], [49.6, 315.0], [49.7, 315.0], [49.8, 315.0], [49.9, 315.0], [50.0, 540.0], [50.1, 540.0], [50.2, 540.0], [50.3, 540.0], [50.4, 540.0], [50.5, 540.0], [50.6, 540.0], [50.7, 545.0], [50.8, 545.0], [50.9, 545.0], [51.0, 545.0], [51.1, 545.0], [51.2, 545.0], [51.3, 555.0], [51.4, 555.0], [51.5, 555.0], [51.6, 555.0], [51.7, 555.0], [51.8, 555.0], [51.9, 558.0], [52.0, 558.0], [52.1, 558.0], [52.2, 558.0], [52.3, 558.0], [52.4, 558.0], [52.5, 559.0], [52.6, 559.0], [52.7, 559.0], [52.8, 559.0], [52.9, 559.0], [53.0, 559.0], [53.1, 559.0], [53.2, 559.0], [53.3, 559.0], [53.4, 559.0], [53.5, 559.0], [53.6, 559.0], [53.7, 559.0], [53.8, 561.0], [53.9, 561.0], [54.0, 561.0], [54.1, 561.0], [54.2, 561.0], [54.3, 561.0], [54.4, 563.0], [54.5, 563.0], [54.6, 563.0], [54.7, 563.0], [54.8, 563.0], [54.9, 563.0], [55.0, 565.0], [55.1, 565.0], [55.2, 565.0], [55.3, 565.0], [55.4, 565.0], [55.5, 565.0], [55.6, 565.0], [55.7, 568.0], [55.8, 568.0], [55.9, 568.0], [56.0, 568.0], [56.1, 568.0], [56.2, 568.0], [56.3, 568.0], [56.4, 568.0], [56.5, 568.0], [56.6, 568.0], [56.7, 568.0], [56.8, 568.0], [56.9, 569.0], [57.0, 569.0], [57.1, 569.0], [57.2, 569.0], [57.3, 569.0], [57.4, 569.0], [57.5, 570.0], [57.6, 570.0], [57.7, 570.0], [57.8, 570.0], [57.9, 570.0], [58.0, 570.0], [58.1, 570.0], [58.2, 572.0], [58.3, 572.0], [58.4, 572.0], [58.5, 572.0], [58.6, 572.0], [58.7, 572.0], [58.8, 574.0], [58.9, 574.0], [59.0, 574.0], [59.1, 574.0], [59.2, 574.0], [59.3, 574.0], [59.4, 579.0], [59.5, 579.0], [59.6, 579.0], [59.7, 579.0], [59.8, 579.0], [59.9, 579.0], [60.0, 593.0], [60.1, 593.0], [60.2, 593.0], [60.3, 593.0], [60.4, 593.0], [60.5, 593.0], [60.6, 593.0], [60.7, 594.0], [60.8, 594.0], [60.9, 594.0], [61.0, 594.0], [61.1, 594.0], [61.2, 594.0], [61.3, 595.0], [61.4, 595.0], [61.5, 595.0], [61.6, 595.0], [61.7, 595.0], [61.8, 595.0], [61.9, 598.0], [62.0, 598.0], [62.1, 598.0], [62.2, 598.0], [62.3, 598.0], [62.4, 598.0], [62.5, 599.0], [62.6, 599.0], [62.7, 599.0], [62.8, 599.0], [62.9, 599.0], [63.0, 599.0], [63.1, 599.0], [63.2, 602.0], [63.3, 602.0], [63.4, 602.0], [63.5, 602.0], [63.6, 602.0], [63.7, 602.0], [63.8, 602.0], [63.9, 602.0], [64.0, 602.0], [64.1, 602.0], [64.2, 602.0], [64.3, 602.0], [64.4, 604.0], [64.5, 604.0], [64.6, 604.0], [64.7, 604.0], [64.8, 604.0], [64.9, 604.0], [65.0, 606.0], [65.1, 606.0], [65.2, 606.0], [65.3, 606.0], [65.4, 606.0], [65.5, 606.0], [65.6, 606.0], [65.7, 606.0], [65.8, 606.0], [65.9, 606.0], [66.0, 606.0], [66.1, 606.0], [66.2, 606.0], [66.3, 607.0], [66.4, 607.0], [66.5, 607.0], [66.6, 607.0], [66.7, 607.0], [66.8, 607.0], [66.9, 609.0], [67.0, 609.0], [67.1, 609.0], [67.2, 609.0], [67.3, 609.0], [67.4, 609.0], [67.5, 613.0], [67.6, 613.0], [67.7, 613.0], [67.8, 613.0], [67.9, 613.0], [68.0, 613.0], [68.1, 613.0], [68.2, 613.0], [68.3, 613.0], [68.4, 613.0], [68.5, 613.0], [68.6, 613.0], [68.7, 613.0], [68.8, 613.0], [68.9, 613.0], [69.0, 613.0], [69.1, 613.0], [69.2, 613.0], [69.3, 613.0], [69.4, 614.0], [69.5, 614.0], [69.6, 614.0], [69.7, 614.0], [69.8, 614.0], [69.9, 614.0], [70.0, 616.0], [70.1, 616.0], [70.2, 616.0], [70.3, 616.0], [70.4, 616.0], [70.5, 616.0], [70.6, 616.0], [70.7, 618.0], [70.8, 618.0], [70.9, 618.0], [71.0, 618.0], [71.1, 618.0], [71.2, 618.0], [71.3, 619.0], [71.4, 619.0], [71.5, 619.0], [71.6, 619.0], [71.7, 619.0], [71.8, 619.0], [71.9, 624.0], [72.0, 624.0], [72.1, 624.0], [72.2, 624.0], [72.3, 624.0], [72.4, 624.0], [72.5, 626.0], [72.6, 626.0], [72.7, 626.0], [72.8, 626.0], [72.9, 626.0], [73.0, 626.0], [73.1, 626.0], [73.2, 632.0], [73.3, 632.0], [73.4, 632.0], [73.5, 632.0], [73.6, 632.0], [73.7, 632.0], [73.8, 644.0], [73.9, 644.0], [74.0, 644.0], [74.1, 644.0], [74.2, 644.0], [74.3, 644.0], [74.4, 645.0], [74.5, 645.0], [74.6, 645.0], [74.7, 645.0], [74.8, 645.0], [74.9, 645.0], [75.0, 647.0], [75.1, 647.0], [75.2, 647.0], [75.3, 647.0], [75.4, 647.0], [75.5, 647.0], [75.6, 647.0], [75.7, 650.0], [75.8, 650.0], [75.9, 650.0], [76.0, 650.0], [76.1, 650.0], [76.2, 650.0], [76.3, 650.0], [76.4, 650.0], [76.5, 650.0], [76.6, 650.0], [76.7, 650.0], [76.8, 650.0], [76.9, 654.0], [77.0, 654.0], [77.1, 654.0], [77.2, 654.0], [77.3, 654.0], [77.4, 654.0], [77.5, 658.0], [77.6, 658.0], [77.7, 658.0], [77.8, 658.0], [77.9, 658.0], [78.0, 658.0], [78.1, 658.0], [78.2, 658.0], [78.3, 658.0], [78.4, 658.0], [78.5, 658.0], [78.6, 658.0], [78.7, 658.0], [78.8, 662.0], [78.9, 662.0], [79.0, 662.0], [79.1, 662.0], [79.2, 662.0], [79.3, 662.0], [79.4, 666.0], [79.5, 666.0], [79.6, 666.0], [79.7, 666.0], [79.8, 666.0], [79.9, 666.0], [80.0, 667.0], [80.1, 667.0], [80.2, 667.0], [80.3, 667.0], [80.4, 667.0], [80.5, 667.0], [80.6, 667.0], [80.7, 667.0], [80.8, 667.0], [80.9, 667.0], [81.0, 667.0], [81.1, 667.0], [81.2, 667.0], [81.3, 678.0], [81.4, 678.0], [81.5, 678.0], [81.6, 678.0], [81.7, 678.0], [81.8, 678.0], [81.9, 680.0], [82.0, 680.0], [82.1, 680.0], [82.2, 680.0], [82.3, 680.0], [82.4, 680.0], [82.5, 684.0], [82.6, 684.0], [82.7, 684.0], [82.8, 684.0], [82.9, 684.0], [83.0, 684.0], [83.1, 684.0], [83.2, 686.0], [83.3, 686.0], [83.4, 686.0], [83.5, 686.0], [83.6, 686.0], [83.7, 686.0], [83.8, 697.0], [83.9, 697.0], [84.0, 697.0], [84.1, 697.0], [84.2, 697.0], [84.3, 697.0], [84.4, 706.0], [84.5, 706.0], [84.6, 706.0], [84.7, 706.0], [84.8, 706.0], [84.9, 706.0], [85.0, 709.0], [85.1, 709.0], [85.2, 709.0], [85.3, 709.0], [85.4, 709.0], [85.5, 709.0], [85.6, 709.0], [85.7, 710.0], [85.8, 710.0], [85.9, 710.0], [86.0, 710.0], [86.1, 710.0], [86.2, 710.0], [86.3, 711.0], [86.4, 711.0], [86.5, 711.0], [86.6, 711.0], [86.7, 711.0], [86.8, 711.0], [86.9, 717.0], [87.0, 717.0], [87.1, 717.0], [87.2, 717.0], [87.3, 717.0], [87.4, 717.0], [87.5, 720.0], [87.6, 720.0], [87.7, 720.0], [87.8, 720.0], [87.9, 720.0], [88.0, 720.0], [88.1, 720.0], [88.2, 723.0], [88.3, 723.0], [88.4, 723.0], [88.5, 723.0], [88.6, 723.0], [88.7, 723.0], [88.8, 725.0], [88.9, 725.0], [89.0, 725.0], [89.1, 725.0], [89.2, 725.0], [89.3, 725.0], [89.4, 733.0], [89.5, 733.0], [89.6, 733.0], [89.7, 733.0], [89.8, 733.0], [89.9, 733.0], [90.0, 744.0], [90.1, 744.0], [90.2, 744.0], [90.3, 744.0], [90.4, 744.0], [90.5, 744.0], [90.6, 744.0], [90.7, 751.0], [90.8, 751.0], [90.9, 751.0], [91.0, 751.0], [91.1, 751.0], [91.2, 751.0], [91.3, 753.0], [91.4, 753.0], [91.5, 753.0], [91.6, 753.0], [91.7, 753.0], [91.8, 753.0], [91.9, 754.0], [92.0, 754.0], [92.1, 754.0], [92.2, 754.0], [92.3, 754.0], [92.4, 754.0], [92.5, 759.0], [92.6, 759.0], [92.7, 759.0], [92.8, 759.0], [92.9, 759.0], [93.0, 759.0], [93.1, 759.0], [93.2, 764.0], [93.3, 764.0], [93.4, 764.0], [93.5, 764.0], [93.6, 764.0], [93.7, 764.0], [93.8, 766.0], [93.9, 766.0], [94.0, 766.0], [94.1, 766.0], [94.2, 766.0], [94.3, 766.0], [94.4, 778.0], [94.5, 778.0], [94.6, 778.0], [94.7, 778.0], [94.8, 778.0], [94.9, 778.0], [95.0, 783.0], [95.1, 783.0], [95.2, 783.0], [95.3, 783.0], [95.4, 783.0], [95.5, 783.0], [95.6, 783.0], [95.7, 803.0], [95.8, 803.0], [95.9, 803.0], [96.0, 803.0], [96.1, 803.0], [96.2, 803.0], [96.3, 804.0], [96.4, 804.0], [96.5, 804.0], [96.6, 804.0], [96.7, 804.0], [96.8, 804.0], [96.9, 817.0], [97.0, 817.0], [97.1, 817.0], [97.2, 817.0], [97.3, 817.0], [97.4, 817.0], [97.5, 831.0], [97.6, 831.0], [97.7, 831.0], [97.8, 831.0], [97.9, 831.0], [98.0, 831.0], [98.1, 831.0], [98.2, 1315.0], [98.3, 1315.0], [98.4, 1315.0], [98.5, 1315.0], [98.6, 1315.0], [98.7, 1315.0], [98.8, 1364.0], [98.9, 1364.0], [99.0, 1364.0], [99.1, 1364.0], [99.2, 1364.0], [99.3, 1364.0], [99.4, 1457.0], [99.5, 1457.0], [99.6, 1457.0], [99.7, 1457.0], [99.8, 1457.0], [99.9, 1457.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 59.0, "series": [{"data": [[300.0, 2.0], [600.0, 34.0], [1300.0, 2.0], [1400.0, 1.0], [700.0, 18.0], [100.0, 19.0], [200.0, 59.0], [800.0, 4.0], [500.0, 21.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 80.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 80.0, "series": [{"data": [[0.0, 80.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 80.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.000000000000002, "minX": 1.7770611E12, "maxY": 4.2727272727272725, "series": [{"data": [[1.7770611E12, 4.2727272727272725], [1.77706116E12, 4.000000000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.0, "maxY": 523.7878787878786, "series": [{"data": [[4.0, 462.7945205479453], [2.0, 518.3333333333334], [1.0, 190.0], [5.0, 423.6511627906977], [3.0, 523.7878787878786], [6.0, 246.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.018750000000001, 459.81249999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.366666666666667, "minX": 1.7770611E12, "maxY": 29955.95, "series": [{"data": [[1.7770611E12, 1757.9166666666667], [1.77706116E12, 29955.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7770611E12, 22.366666666666667], [1.77706116E12, 302.96666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 452.6912751677853, "minX": 1.7770611E12, "maxY": 556.2727272727274, "series": [{"data": [[1.7770611E12, 556.2727272727274], [1.77706116E12, 452.6912751677853]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 409.3221476510066, "minX": 1.7770611E12, "maxY": 521.8181818181818, "series": [{"data": [[1.7770611E12, 521.8181818181818], [1.77706116E12, 409.3221476510066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 215.24832214765095, "minX": 1.7770611E12, "maxY": 314.81818181818176, "series": [{"data": [[1.7770611E12, 314.81818181818176], [1.77706116E12, 215.24832214765095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 184.0, "minX": 1.7770611E12, "maxY": 1457.0, "series": [{"data": [[1.7770611E12, 1457.0], [1.77706116E12, 1364.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7770611E12, 1331.8000000000004], [1.77706116E12, 725.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7770611E12, 1457.0], [1.77706116E12, 1339.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7770611E12, 1457.0], [1.77706116E12, 765.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7770611E12, 199.0], [1.77706116E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7770611E12, 569.0], [1.77706116E12, 315.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 267.5, "minX": 1.0, "maxY": 576.5, "series": [{"data": [[1.0, 421.5], [4.0, 576.5], [2.0, 549.0], [5.0, 267.5], [3.0, 314.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 221.5, "minX": 1.0, "maxY": 550.0, "series": [{"data": [[1.0, 376.0], [4.0, 550.0], [2.0, 534.0], [5.0, 221.5], [3.0, 249.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.7770611E12, "maxY": 2.433333333333333, "series": [{"data": [[1.7770611E12, 0.23333333333333334], [1.77706116E12, 2.433333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7770611E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.7770611E12, 0.18333333333333332], [1.77706116E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77706116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7770611E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.7770611E12, 0.18333333333333332], [1.77706116E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7770611E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.7770611E12, 0.18333333333333332], [1.77706116E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77706116E12, "title": "Total Transactions Per Second"}},
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

