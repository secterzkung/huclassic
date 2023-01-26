function LoginBox(){
    return (
    <div class="container">
    <section id="loginbox" class="mb-2">
      <div class="bglogin p-2">
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-3">
            <div class="indexlogo">
              <div class="logoindex">
                <img src="./images/huay-logo-main.png" alt="" title="" class="heightlogo d-lg-block d-none" />
                <img src="./images/huay-logo.png" alt="" title="" class="d-lg-none d-block" />
              </div>
            </div>
            <br />
          </div>
          <div class="col-sm-12 col-md-8 col-lg-9">
            <form id="login-form" action="" method="post">
              <div class="form-row form-middle">
                <div class="col-sm-12 col-md-4 col-lg-3 p-1">
                  <div class="form-group mb-0">
                    <div class="form-group field-login-form-login required">
                      <input type="text" id="login-form-login" class="form-control" name="login" value="" tabindex="1" placeholder="ชื่อผู้ใช้" aria-required="true" />
                    </div> 
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-3 p-1">
                  <div class="form-group mb-0">
                    <div class="form-group field-login-form-password required">
                      <input type="password" id="login-form-password" class="form-control" name="password" value="" tabindex="2" placeholder="รหัสผ่าน" aria-required="true" />
                    </div> 
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 p-1">
                  <div class="row">
                    <div class="col col-6 col-md-12 text-left text-sm-left text-md-right remember">
                      <div class="form-group">
                        <div class="form-check text-white">
                          <div class="form-group field-login-form-rememberme">
                            <input type="hidden" name="login-form[rememberMe]" value="0" /><label><input type="checkbox" id="login-form-rememberme" name="login-form[rememberMe]" value="1" tabindex="3" /> จำฉันไว้ในระบบ</label>
                            <div class="help-block"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 p-1">
                  <div class="dropdown bootstrap-select form-control">
                    <select id="lang" data-show-content="true" class="form-control" tabindex="-98">
                      <option data-content="<span class='flag-icon flag-icon-th'></span> ไทย" selected="selected" value="thai"></option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 p-1">
                  <button type="submit" class="btn btn-danger_bkk btn-block">เข้าสู่ระบบ</button>
                </div>
              </div>
            </form> 
          </div>
        </div>
      </div>
      <div class="subbglogin p-2">
			<div class="row">
                <div class="col-sm-12 col-md-6 col-lg-9 rule text-right">
					<a href="" class="float-left" data-toggle="modal" data-target="#ModalRate">อัตราการจ่าย</a>
					<a href="" data-toggle="modal" data-target="#ModalRule">กฏกติกาและข้อบังคับ</a>
				</div>
			    <div class="col-sm-12 col-md-6 col-lg-3 submenulogin">
					<div class="row">
						<div class="col-6 pr-1">
							<div class="btoutline">
                                <a href="" class="btn silver-btn btn-sm btn-block" target="_blank">
                                    <img src="./images/icon/contact_line.png" class="width20" /> ติดต่อเรา
                                </a>
							</div>
						</div>
											<div class="col-6 pl-1">
												<div class="btoutline2">
                                                    <a href="" class="btn btn-outline-dark-2 btn-sm btn-block btn-register-lottovip">
                                                        <img src="./images/icon/login-ICONS.png" class="width20" /> ลงทะเบียน</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
    </section>

  </div>
  );
}
export default LoginBox;