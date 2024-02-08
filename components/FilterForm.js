import React from "react";

import "../assets/css/font-awesome.min.css";
import "../assets/css/linearicons.css";
import "../assets/css/flaticon.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootsnav.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

export default function FilterForm(){
    return(
            <div class="container" >
                <div class="row">
                    <div class="col-md-12">
                        <div class="model-search-content" style={{bottom:"-150px",zIndex:"1000"}}>
                            <div class="row">
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>select year</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">year</option>

                                                <option value="2018">2018</option>

                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                        <h2>body style</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">style</option>

                                                <option value="sedan">sedan</option>

                                                <option value="van">van</option>
                                                <option value="roadster">roadster</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>select make</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">make</option>

                                                <option value="toyota">toyota</option>

                                                <option value="holden">holden</option>
                                                <option value="maecedes-benz">maecedes-benz.</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                        <h2>car condition</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">condition</option>

                                                <option value="something">something</option>

                                                <option value="something">something</option>
                                                <option value="something">something</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-offset-1 col-md-2 col-sm-12">
                                    <div class="single-model-search">
                                        <h2>select model</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">model</option>

                                                <option value="kia-rio">kia-rio</option>

                                                <option value="mitsubishi">mitsubishi</option>
                                                <option value="ford">ford</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-model-search">
                                        <h2>select price</h2>
                                        <div class="model-select-icon">
                                            <select class="form-control">

                                                <option value="default">price</option>

                                                <option value="$0.00">$0.00</option>

                                                <option value="$0.00">$0.00</option>
                                                <option value="$0.00">$0.00</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-12">
                                    <div class="single-model-search text-center">
                                        <button class="welcome-btn model-search-btn" onclick="window.location.href='#'">
                                            search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}