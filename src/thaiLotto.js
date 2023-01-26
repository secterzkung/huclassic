function ThaiLotto(props){
	const { up,up3,down3,down2,thaidate} = props;
	const thflag = "./images/icon/th.svg";
    return (
			<div class="col-sm-12 col-md-6 col-lg-6 mb-2 px-1">
				<div class="bgwhitealpha blue shadow-sm rounded p-2 h-100 xtarget" id="government">
					<h6 class="text-white">
						<img src={thflag} class="height20" /> 
						หวยรัฐบาลไทย <span class="badge badge-danger">{thaidate}</span>
					</h6>
					<div class="card border-0 text-center mb-2">
						<div class="card-body p-1">
							<p class="font-weight-bold mb-0">{up}</p>
						</div>
					</div>
					<div class="row">
						<div class="col pr-1">
							<div class="card border-0 text-center">
								<div class="card-header blue text-white bg-blue p-1">
									3ตัวหน้า<br />
								</div>
                                <div class="card-body p-1">
                                    <p class="card-text mb-0 font-weight-bold">{up3}</p>
                                </div>
							</div>
						</div>
						<div class="col px-1">
							<div class="card border-0 text-center">
								<div class="card-header blue text-white bg-blue p-1">3ตัวล่าง<br /></div>
								<div class="card-body p-1">
									<p class="card-text mb-0 font-weight-bold">{down3}</p>
								</div>
							</div>
						</div>
						<div class="col pl-1">
							<div class="card border-0 text-center">
								<div class="card-header blue text-white bg-blue p-1">2ตัวล่าง<br /></div>
								<div class="card-body p-1">
									<p class="card-text mb-0 font-weight-bold">{down2}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}
export default ThaiLotto;