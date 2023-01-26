function Yeekee(props){
	const { round, up, down} = props;
    return (
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 px-1">
											<div class="card border-light-2 text-center shadow-sm mb-2">
												<div class="card-header blue text-white bg-header p-1">
													จับยี่กี VIP - รอบที่ {round}
												</div>
												<div class="card-body p-0">
													<div class="d-flex flex-row">
														<div class="card text-center w-50 border-card-right m-0">
															<div class="card-header blue sub-card-header bg-transparent p-0">
																3ตัวบน<br />
															</div>
															<div class="card-body p-0">
																<p class="card-text">
																{up} </p>
															</div>
														</div>
														<div class="card text-center w-50 border-card-right m-0">
															<div class="card-header blue sub-card-header bg-transparent p-0">
																2ตัวล่าง<br />
															</div>
															<div class="card-body p-0">
																<p class="card-text">
																{down} </p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
    );
}
export default Yeekee;
