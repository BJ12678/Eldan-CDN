    Vue.component('tab-home', {
      template: `
      <div>
        <!-- Page Heading -->
          <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                    <em>{{ select_year }}</em> Statistics <small> Overview</small>
                  </h1>
                  <ol class="breadcrumb">
                    <li class="active">
                      <i class="fas fa-chart-line"></i> Current Status Month of:
                      <select
                        class="select-month"
                        v-model="select_month"
                        name="month"
                      >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </li>
                  </ol>
                </div>
              </div>
              <!-- /.row -->
      
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fa fa-fw fa-truck fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Delivery</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fas fa-coins fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Remittances</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-yellow">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fa fa-fw fa-wrench fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              expensesMonth()
                                .reduce((currentTotal, item) => {
                                  return item.amount + currentTotal;
                                }, 0)
                                .toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Expenses</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-red">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fas fa-piggy-bank fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) *
                                  20 -
                                expensesMonth().reduce((currentTotal, item) => {
                                  return item.amount + currentTotal;
                                }, 0)
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Net Income</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- /.row -->
      
              <div class="row">
                <div class="col-lg-12">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">
                        Summary Details
                        <span class="text-muted">
                          <select
                            class="select-year"
                            v-model="select_year"
                            name="year"
                          >
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </span>
                      </h3>
                    </div>
                    <div class="panel-body">
                      <div class="table-responsive">
                        <table class="table table-bordered table-hover table-striped">
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>Delivery</th>
                              <th>Remittance</th>
                              <th>Expenses</th>
                              <th>Net Income</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Total</th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.item + currentTotal;
                                      }, 0) * 20
                                  ).toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.payments + currentTotal;
                                      }, 0) * 20
                                  ).toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  items
                                    .filter((item) =>
                                      item.date.match(this.select_year)
                                    )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.payments + currentTotal;
                                      }, 0) *
                                      20 -
                                    items
                                      .filter((item) =>
                                        item.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, item) => {
                                        return item.amount + currentTotal;
                                      }, 0)
                                  ).toLocaleString('en')
                                }}php
                              </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>January</td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  January_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    January_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>February</td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  February_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    February_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>March</td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  March_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    March_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>April</td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  April_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    April_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>May</td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  May_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    May_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>June</td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  June_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    June_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  July_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    July_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>August</td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  August_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    August_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>September</td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  September_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    September_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>October</td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  October_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    October_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>November</td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  November_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    November_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>December</td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  December_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    December_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-center">
                        <a href="#">Copyright © Biler IT Solutions 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.row -->
            </div>
        `,
      data() {
        return {
          select_month: this.currentMonth(),
          select_year: new Date().getFullYear()
        };
      },
      computed: {
        ...Vuex.mapState('salesModule', ['sales']),
        ...Vuex.mapState('expensesModule', ['items']),
        ...Vuex.mapGetters('salesModule', [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]),
        ...Vuex.mapGetters('expensesModule', [
          'January_',
          'February_',
          'March_',
          'April_',
          'May_',
          'June_',
          'July_',
          'August_',
          'September_',
          'October_',
          'November_',
          'December_'
        ])
      },
      methods: {
        ...Vuex.mapActions('customersModule', ['getCustomersAction']),
        ...Vuex.mapActions('salesModule', ['getSalesAction']),
        ...Vuex.mapActions('expensesModule', ['getExpensesAction']),

        currentMonth() {
          const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];

          const d = new Date();
          let name = month[d.getMonth()];
          return name;
        },
        selectedMonth() {
          if (this.select_month === 'January') {
            return this.January.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else {
            return this.December.filter((sale) =>
              sale.date.match(this.select_year)
            );
          }
        },

        expensesMonth() {
          if (this.select_month === 'January') {
            return this.January_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else {
            return this.December_.filter((item) =>
              item.date.match(this.select_year)
            );
          }
        }
      }
    });

    Vue.component('tab-customers', {
      template: `
        <div class="row">
          <div class="col-lg-12">
            <h2>Customers</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-li" @click.prevent="showAddForm">
                Add
              </li>
              <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                Edit
              </li>
              <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                Delete
              </li>
              <li class="breadcrumb-li" @click.prevent="cancelButton">
                Cancel
              </li>
              <li class="breadcrumb-li">
                Search:
                <input
                  type="search"
                  class="search-input"
                  v-model="search_value"
                />
              </li>
            </ol>
            <!-- <div class="alert alert-success">
              <strong>Success!</strong> You successfully finished process.
            </div>
            <div class="alert alert-danger">
              <strong>Ooops!</strong> Change a few things up and try submitting
              again.
            </div> -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Seller</th>
                    <th>Contact</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add customer section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewCust"
                        class="label label-success"
                        >Submit</span
                      >

                      <input v-model="add_form.name" type="text" />
                    </td>
                    <td><input v-model="add_form.area" type="text" /></td>
                    <td>
                      <select v-model="add_form.seller" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <input v-model.number="add_form.contact" type="number" />
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="customer in searchCustomer()" :key="customer.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(customer.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteCustomerAction(customer)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updCust(customer)"
                          v-show="
                            show_update_form == true &&
                              selected_id === customer.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>
                        {{ customer.name }} </span
                      ><br />
                      <input
                        type="text"
                        v-model="customer.name"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.area }}<br />
                      <input
                        type="text"
                        v-model="customer.area"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.seller }}<br />
                      <input
                        type="text"
                        v-model="customer.seller"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.contact }}<br />
                      <input
                        type="number"
                        v-model.number="customer.contact"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.remarks }}<br />
                      <textarea
                        v-model="customer.remarks"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /.row -->
`,
      data() {
        return {
          search_value: '',
          add_form: {
            id: '',
            name: '',
            area: '',
            seller: 'station',
            contact: '',
            remarks: ''
          }
        };
      },
      computed: {
        ...Vuex.mapState('customersModule', ['customers']),
        ...Vuex.mapState([
          'selected_id',
          'show_add_form',
          'show_update_form',
          'show_update_icon',
          'show_delete_button'
        ])
      },
      methods: {
        ...Vuex.mapActions([
          'showAddForm',
          'showUpdateForm',
          'showUpdateIcon',
          'showDeleteButton',
          'cancelButton'
        ]),
        ...Vuex.mapActions('customersModule', [
          'addCustomerAction',
          'updateCustomerAction',
          'deleteCustomerAction'
        ]),

        addNewCust() {
          this.addCustomerAction({
            id: Math.random().toString(36).substring(2),
            name: this.add_form.name,
            area: this.add_form.area,
            seller: this.add_form.seller,
            contact: this.add_form.contact,
            remarks: this.add_form.remarks
          });
          this.add_form.id= '',
          this.add_form.name= '',
          this.add_form.area= '',
          this.add_form.seller= 'station',
          this.add_form.contact= '',
          this.add_form.remarks= ''
        },

        // update customer section
        updCust(selected_cust) {
          this.updateCustomerAction({
            id: selected_cust.id,
            name: selected_cust.name,
            area: selected_cust.area,
            seller: selected_cust.seller,
            contact: selected_cust.contact,
            remarks: selected_cust.remarks
          });
        },

        searchCustomer() {
          let findMatch = /([a-z])\w+/gi;
          findMatch = this.search_value;
          if (this.search_value != null) {
            return this.customers.filter(
              (customer) =>
                customer.name.match(findMatch) ||
                customer.area.match(findMatch) ||
                customer.seller.match(findMatch)
            );
          }
        }
      }
    });

    Vue.component('tab-sales', {
      template: `
      <div class="row">
                <div class="col-lg-12">
                  <h2>Sales</h2>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-li" @click.prevent="showAddForm">
                      Add
                    </li>
                    <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                      Edit
                    </li>
                    <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                      Delete
                    </li>
                    <li class="breadcrumb-li" @click.prevent="cancelButton">
                      Cancel
                    </li>
                    <li class="breadcrumb-li">
                      Month:
                      <select
                        class="select-month"
                        v-model="select_month"
                        name="month"
                      >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <span>
                        <select class="select-year" v-model="select_year" name="year">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </span>
                    </li>
                    <li class="breadcrumb-li">
                      Search:
                      <input
                        type="search"
                        class="search-input"
                        v-model="search_value"
                      />
                    </li>
                  </ol>
                  <!-- <div class="alert alert-success">
                    <strong>Success!</strong> You successfully finished process.
                  </div>
                  <div class="alert alert-danger">
                    <strong>Ooops!</strong> Change a few things up and try submitting
                    again.
                  </div> -->
                  <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Customer</th>
                          <th>Seller</th>
                          <th>Deliver</th>
                          <th>Paid</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- add new item section -->
                        <tr v-if="show_add_form == true">
                          <td class="prevent-wordbreak">
                            <span
                              @click.prevent="addNewSale"
                              class="label label-success"
                              >Submit</span
                            >
                            <input v-model="add_form.date" type="date" />
                          </td>
                          <td>
                            <input v-model="add_form.customer" type="text" />
                          </td>
                          <td>
                            <select v-model="add_form.seller" name="seller">
                              <option value="station">station</option>
                              <option value="seller1">seller1</option>
                              <option value="seller2">seller2</option>
                            </select>
                          </td>
                          <td>
                            <input v-model.number="add_form.item" type="number" />
                          </td>
                          <td>
                            <input v-model.number="add_form.payments" type="number" />
                          </td>
                          <td>
                            <textarea v-model="add_form.remarks" />
                          </td>
                        </tr>
                        <!-- end add customer section -->
      
                        <tr v-for="sale in searchItem()" :key="sale.id">
                          <td>
                            <span
                              v-show="show_update_icon == true"
                              class="small text-muted"
                            >
                              <i
                                class="fas fa-pencil-alt"
                                @click.prevent="showUpdateForm(sale.id)"
                              ></i>
                            </span>
                            <span
                              @click.prevent="deleteSaleAction(sale)"
                              v-show="show_delete_button == true"
                              class="label label-danger"
                              >Delete</span
                            >
                            <span class="prevent-wordbreak">
                              <span
                                @click.prevent="updSale(sale)"
                                v-show="
                                  show_update_form == true && selected_id === sale.id
                                "
                                class="label label-success"
                              >
                                Update
                              </span>
                              {{ sale.date }} </span
                            ><br />
                            <input
                              type="date"
                              class="input-date"
                              v-show="selected_id === sale.id"
                              v-model="sale.date"
                            />
                          </td>
                          <td>
                            {{ sale.customer }}<br />
                            <input
                              type="text"
                              v-model="sale.customer"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.seller }}<br />
                            <select
                              name="seller"
                              v-model="sale.seller"
                              v-show="selected_id === sale.id"
                            >
                              <option value="station">station</option>
                              <option value="seller1">seller1</option>
                              <option value="seller2">seller2</option>
                            </select>
                          </td>
                          <td>
                            {{ sale.item }}<br />
                            <input
                              type="number"
                              v-model.number="sale.item"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.payments }}<br />
                            <input
                              type="number"
                              v-model.number="sale.payments"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.remarks }}<br />
                            <textarea
                              v-model="sale.remarks"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>`,
      data() {
        return {
          search_value: '',
          select_month: this.currentMonth(),
          select_year: new Date().getFullYear(),
          add_form: {
            date: new Date().toISOString().substr(0, 10),
            customer: '',
            seller: 'station',
            item: 0,
            payments: 0,
            remarks: ''
          }
        };
      },
      computed: {
        ...Vuex.mapState([
          'selected_id',
          'current_year',
          'show_add_form',
          'show_update_form',
          'show_update_icon',
          'show_delete_button'
        ]),
        ...Vuex.mapGetters('salesModule', [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ])
      },
      methods: {
        ...Vuex.mapActions([
          'showAddForm',
          'showUpdateForm',
          'showUpdateIcon',
          'showDeleteButton',
          'cancelButton'
        ]),

        ...Vuex.mapActions('salesModule', [
          'addSaleAction',
          'updateSaleAction',
          'deleteSaleAction'
        ]),
        // add section
        addNewSale() {
          this.addSaleAction(this.add_form);
        },

        // update section
        updSale(selected_sale) {
          this.updateSaleAction({
            id: selected_sale.id,
            date: selected_sale.date,
            customer: selected_sale.customer,
            seller: selected_sale.seller,
            item: selected_sale.item,
            payments: selected_sale.payments,
            remarks: selected_sale.remarks
          });
        },

        currentMonth() {
          const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];

          const d = new Date();
          let name = month[d.getMonth()];
          return name;
        }, //end of currenMonth()

        searchItem() {
          let findMatch = /([a-z])\w+/gi;
          findMatch = this.search_value;
          if (this.search_value != null) {
            return this.selectedMonth()
              .filter(
                (sale) =>
                  sale.date.match(findMatch) ||
                  sale.customer.match(findMatch) ||
                  sale.seller.match(findMatch)
              )
              .filter((sale) => sale.date.match(this.select_year));
          }
        },

        selectedMonth() {
          if (this.select_month === 'January') {
            return this.January.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else {
            return this.December.filter((sale) =>
              sale.date.match(this.select_year)
            );
          }
        } //end of selectedMonth()
      }
    });

    Vue.component('tab-expenses', {
      template: `
        <div class="row">
          <div class="col-lg-12">
            <h2>Expenses</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-li" @click.prevent="showAddForm">
                Add
              </li>
              <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                Edit
              </li>
              <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                Delete
              </li>
              <li class="breadcrumb-li" @click.prevent="cancelButton">
                Cancel
              </li>
              <li class="breadcrumb-li">
                Month:
                <select
                  class="select-month"
                  v-model="select_month"
                  name="month"
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <span>
                  <select class="select-year" v-model="select_year" name="year">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </span>
              </li>
              <li class="breadcrumb-li">
                Search:
                <input
                  type="search"
                  class="search-input"
                  v-model="search_value"
                />
              </li>
            </ol>
            <!-- <div class="alert alert-success">
              <strong>Success!</strong> You successfully finished process.
            </div>
            <div class="alert alert-danger">
              <strong>Ooops!</strong> Change a few things up and try submitting
              again.
            </div> -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee</th>
                    <th>Remarks</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add new item section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewItem"
                        class="label label-success"
                        >Submit</span
                      >
                      <input v-model="add_form.date" type="date" id="date" />
                    </td>
                    <td>
                      <select v-model="add_form.employee" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                    <td>
                      <input v-model.number="add_form.amount" type="number" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="item in searchItem()" :key="item.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(item.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteItemAction(item)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updItem(item)"
                          v-show="
                            show_update_form == true && selected_id === item.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>

                        {{ item.date }}</span
                      ><br />
                      <input
                        type="date"
                        class="input-date"
                        v-model="item.date"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.employee }}<br />
                      <input
                        type="text"
                        v-model="item.employee"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.remarks }}<br />
                      <textarea
                        v-model="item.remarks"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.amount.toLocaleString('en') }}<br />
                      <input
                        type="number"
                        v-model.number="item.amount"
                        v-show="selected_id === item.id"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`,
      data() {
        return {
          search_value: '',
          select_month: this.currentMonth(),
          select_year: new Date().getFullYear(),
          // add  form
          add_form: {
            date: new Date().toISOString().substr(0, 10),
            employee: 'station',
            remarks: '',
            amount: 0
          }
        };
      },
      computed: {
        ...Vuex.mapState([
          'selected_id',
          'current_year',
          'show_add_form',
          'show_update_form',
          'show_update_icon',
          'show_delete_button'
        ]),
        ...Vuex.mapGetters('expensesModule', [
          'January_',
          'February_',
          'March_',
          'April_',
          'May_',
          'June_',
          'July_',
          'August_',
          'September_',
          'October_',
          'November_',
          'December_'
        ])
      },
      methods: {
        ...Vuex.mapActions([
          'showAddForm',
          'showUpdateForm',
          'showUpdateIcon',
          'showDeleteButton',
          'cancelButton'
        ]),

        ...Vuex.mapActions('expensesModule', [
          'addItemAction',
          'updateItemAction',
          'deleteItemAction'
        ]),

        // add section
        addNewItem() {
          this.addItemAction(this.add_form);
        },

        // update section
        updItem(selected_item) {
          this.updateItemAction({
            id: selected_item.id,
            date: selected_item.date,
            employee: selected_item.employee,
            remarks: selected_item.remarks,
            amount: selected_item.amount
          });
        },

        currentMonth() {
          const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];

          const d = new Date();
          let name = month[d.getMonth()];
          return name;
        },

        searchItem() {
          let findMatch = /([a-z])\w+/gi;
          findMatch = this.search_value;
          if (this.search_value != null) {
            return this.expensesMonth()
              .filter(
                (item) =>
                  item.date.match(findMatch) ||
                  item.employee.match(findMatch) ||
                  item.remarks.match(findMatch)
              )
              .filter((item) => item.date.match(this.select_year));
          }
        },

        expensesMonth() {
          if (this.select_month === 'January') {
            return this.January_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else {
            return this.December_.filter((item) =>
              item.date.match(this.select_year)
            );
          }
        }
      }
    });

    Vue.component('tab-financials', {
      template: `
        <div>
          <!-- Main Content -->
          <div class="card-header">
              <h4>Financials Report
                <span class="text-muted">
                  <select class="select-year" v-model="select_year" name="year">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </span>
              </h4>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  width="100%"
                  cellspacing="0"
                >
                  <!-- delivery section -->
                  <tbody>
                    <tr>
                      <th>Delivery</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- remittances section -->
                  <tbody>
                    <tr>
                      <th>Remittances</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- expenses section -->
                  <tbody>
                    <tr>
                      <th>Expenses</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/station/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller1/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller2/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>Amount (Php)</strong>
                      </th>
                      <th>
                        {{
                          January_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          February_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          March_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          April_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          May_.filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          June_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          July_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          August_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          September_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          October_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          November_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          December_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          items
                            .filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>`,
      data() {
        return {
          select_month: this.currentMonth(),
          select_year: new Date().getFullYear()
        };
      },
      computed: {
        ...Vuex.mapState('salesModule', ['sales']),
        ...Vuex.mapState('expensesModule', ['items']),
        ...Vuex.mapGetters('salesModule', [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]),
        ...Vuex.mapGetters('expensesModule', [
          'January_',
          'February_',
          'March_',
          'April_',
          'May_',
          'June_',
          'July_',
          'August_',
          'September_',
          'October_',
          'November_',
          'December_'
        ])
      },
      methods: {
        currentMonth() {
          const month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];

          const d = new Date();
          let name = month[d.getMonth()];
          return name;
        },
        selectedMonth() {
          if (this.select_month === 'January') {
            return this.January.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November.filter((sale) =>
              sale.date.match(this.select_year)
            );
          } else {
            return this.December.filter((sale) =>
              sale.date.match(this.select_year)
            );
          }
        },

        expensesMonth() {
          if (this.select_month === 'January') {
            return this.January_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'February') {
            return this.February_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'March') {
            return this.March_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'April') {
            return this.April_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'May') {
            return this.May_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'June') {
            return this.June_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'July') {
            return this.July_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'August') {
            return this.August_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'September') {
            return this.September_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'October') {
            return this.October_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else if (this.select_month === 'November') {
            return this.November_.filter((item) =>
              item.date.match(this.select_year)
            );
          } else {
            return this.December_.filter((item) =>
              item.date.match(this.select_year)
            );
          }
        }
      }
    });

    const customersModule = {
      namespaced: true,
      state: () => ({
        customers: []
      }),
      getters: {
        totalCustomerGetter: (state) => state.customers.length,
        totalCustomerStationGetter: (state) =>
          state.customers.filter((customer) => customer.seller === 'station')
            .length,
        totalCustomerSeller1Getter: (state) =>
          state.customers.filter((customer) => customer.seller === 'seller1')
            .length,
        totalCustomerSeller2Getter: (state) =>
          state.customers.filter((customer) => customer.seller === 'seller2')
            .length
      },
      actions: {
        // async getCustomersAction({ commit }) {
        //   await customerApi
        //     .fetchCust()
        //     .then((res) => commit('GET_CUSTOMERS', res.data));
        // },
        addCustomerAction({ commit }, payload) {
          // customerApi.addCust(payload)
          commit('ADD_CUSTOMER', payload);
        },
        updateCustomerAction({ commit }, payload) {
          // customerApi.updateCust(payload)
          commit('UPDATE_CUSTOMER', payload);
        },
        deleteCustomerAction({ commit }, payload) {
          // customerApi.deleteCust(payload)
          commit('DELETE_CUSTOMER', payload);
        }
      },
      mutations: {
        GET_CUSTOMERS: (state, payload) => {
          state.customers = payload;
        },
        ADD_CUSTOMER: (state, payload) => {
          state.customers.push(payload);
          store.state.show_add_form = false;
        },
        UPDATE_CUSTOMER: (state, cust) => {
          const index = state.customers.findIndex(
            (customer) => customer.id === cust.id
          );
          if (index !== -1) {
            state.customers.splice(index, 1, cust);
          }
          store.state.show_update_form = false;
          store.state.selected_id = null;
        },
        DELETE_CUSTOMER: (state, payload) => {
          const index = state.customers.findIndex(
            (customer) => customer.id === payload.id
          );
          if (index !== -1) {
            state.customers.splice(index, 1);
          }
          store.state.show_delete_button = false;
          store.state.selected_id = null;
        }
      }
    };

    const salesModule = {
      namespaced: true,
      state: () => ({
        sales: []
      }),
      getters: {
        // seller
        station: (state) =>
          state.sales.filter((sale) => sale.seller.match(/station/g)),
        seller1: (state) =>
          state.sales.filter((sale) => sale.seller.match(/seller1/g)),
        seller2: (state) =>
          state.sales.filter((sale) => sale.seller.match(/seller2/g)),

        // monthly sales
        January: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-01/g)),
        February: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-02/g)),
        March: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-03/g)),
        April: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-04/g)),
        May: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-05/g)),
        June: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-06/g)),
        July: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-07/g)),
        August: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-08/g)),
        September: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-09/g)),
        October: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-10/g)),
        November: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-11/g)),
        December: (state) =>
          state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-12/g)),

        // get the total number of items in current year
        totalItemsGetter: (state) =>
          state.sales
            .filter((sale) => sale.date.match(new Date().getFullYear()))
            .reduce((currentTotal, sale) => {
              return sale.item + currentTotal;
            }, 0),

        // get the total payments for items in current year
        totalPaymentsGetter: (state) =>
          state.sales
            .filter((sale) => sale.date.match(new Date().getFullYear()))
            .reduce((currentTotal, sale) => {
              return sale.payments + currentTotal;
            }, 0),

        // get the total items of station in current year
        totalStationItems: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/station/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.item + currentTotal;
            }, 0),

        // get the total payments of station in current year
        totalStationPayments: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/station/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.payments + currentTotal;
            }, 0),

        // get the total items  of seller1 in current year
        totalSeller1Items: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/seller1/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.item + currentTotal;
            }, 0),

        // get the total payments of seller1 in current year
        totalSeller1Payments: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/seller1/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.payments + currentTotal;
            }, 0),

        // get the total items of seller2 in current year
        totalSeller2Items: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/seller2/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.item + currentTotal;
            }, 0),

        // get the total payments of seller2 in current year
        totalSeller2Payments: (state) =>
          state.sales
            .filter(
              (sale) =>
                sale.seller.match(/seller2/g) &&
                sale.date.match(new Date().getFullYear())
            )
            .reduce((currentTotal, sale) => {
              return sale.payments + currentTotal;
            }, 0)
      },
      actions: {
        async getSalesAction({ commit }) {
          await saleApi
            .fetchSales()
            .then((res) => commit('GET_SALES', res.data));
        },

        addSaleAction({ commit }, payload) {
          saleApi
            .addSale(payload)
            .then((res) => commit('ADD_SALE', res.data));
        },

        updateSaleAction({ commit }, payload) {
          saleApi
            .updateSale(payload)
            .then((res) => commit('UPDATE_SALE', res.data));
        },

        deleteSaleAction({ commit }, payload) {
          saleApi
            .deleteSale(payload)
            .then((res) => commit('DELETE_SALE', res.data));
        }
      },
      mutations: {
        GET_SALES: (state, payload) => {
          state.sales = payload;
        },

        ADD_SALE: (state, payload) => {
          state.sales.push(payload);
          store.state.show_add_form = false;
        },

        UPDATE_SALE: (state, payload) => {
          const index = state.sales.findIndex(
            (sale) => sale.id === payload.id
          );
          if (index !== -1) {
            state.sales.splice(index, 1, payload);
          }
          store.state.show_update_form = false;
          store.state.selected_id = null;
        },

        DELETE_SALE: (state, payload) => {
          const index = state.sales.findIndex(
            (sale) => sale.id === payload.id
          );
          if (index !== -1) {
            state.sales.splice(index, 1);
          }
          store.state.show_delete_button = false;
          store.state.selected_id = null;
        }
      }
    };

    const expensesModule = {
      namespaced: true,
      state: () => ({
        items: []
      }),
      getters: {
        station: (state) =>
          state.items.filter((item) => item.employee === 'station'),
        seller1: (state) =>
          state.items.filter((item) => item.employee === 'seller1'),
        seller2: (state) =>
          state.items.filter((item) => item.employee === 'seller2'),
        // monthly
        January_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-01/g)),
        February_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-02/g)),
        March_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-03/g)),
        April_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-04/g)),
        May_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-05/g)),
        June_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-06/g)),
        July_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-07/g)),
        August_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-08/g)),
        September_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-09/g)),
        October_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-10/g)),
        November_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-11/g)),
        December_: (state) =>
          state.items.filter((item) => item.date.match(/20[0-9][0-9]-12/g)),

        totalExpensesGetter: (state) =>
          state.items
            .filter((item) => item.date.match(new Date().getFullYear()))
            .reduce((currentTotal, item) => {
              return item.amount + currentTotal;
            }, 0),

        totalStationExpensesGetter: (state, getters) => {
          return getters.station
            .filter((item) => item.date.match(new Date().getFullYear()))
            .reduce((currentTotal, item) => {
              return item.amount + currentTotal;
            }, 0);
        },

        totalSeller1ExpensesGetter: (state, getters) => {
          return getters.seller1
            .filter((item) => item.date.match(new Date().getFullYear()))
            .reduce((currentTotal, item) => {
              return item.amount + currentTotal;
            }, 0);
        },

        totalSeller2ExpensesGetter: (state, getters) => {
          return getters.seller2
            .filter((item) => item.date.match(new Date().getFullYear()))
            .reduce((currentTotal, item) => {
              return item.amount + currentTotal;
            }, 0);
        }
      },
      actions: {
        async getExpensesAction({ commit }) {
          await expensesApi
            .fetchMaintenance()
            .then((res) => commit('GET_ITEMS', res.data));
        },

        addItemAction({ commit }, payload) {
          expensesApi
            .addMaintenance(payload)
            .then((res) => commit('ADD_ITEM', res.data));
        },

        updateItemAction({ commit }, payload) {
          expensesApi
            .updateMaintenance(payload)
            .then((res) => commit('UPDATE_ITEM', res.data));
        },

        deleteItemAction({ commit }, payload) {
          expensesApi
            .deleteMaintenance(payload)
            .then((res) => commit('DELETE_ITEM', res.data));
        }
      },
      mutations: {
        GET_ITEMS: (state, payload) => {
          state.items = payload;
        },
        ADD_ITEM: (state, payload) => {
          state.items.push(payload);
          store.state.show_add_form = false;
        },

        UPDATE_ITEM: (state, payload) => {
          const index = state.items.findIndex(
            (item) => item.id === payload.id
          );
          if (index !== -1) {
            state.items.splice(index, 1, payload);
          }
          store.state.show_update_form = false;
          store.state.selected_id = null;
        },

        DELETE_ITEM: (state, payload) => {
          const index = state.items.findIndex(
            (item) => item.id === payload.id
          );
          if (index !== -1) {
            state.items.splice(index, 1);
          }
          store.state.show_delete_button = false;
          store.state.selected_id = null;
        }
      }
    };

    /* const HTTP = axios.create({
      baseURL: `http://localhost:3333/api`,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }); */
    const customerApi = {
      fetchCust() {
        return HTTP.get(`/customers`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      }, // get all customers

      addCust(data) {
        return HTTP.post(
          `/customers`,
          {
            name: data.name,
            area: data.area,
            seller: data.seller,
            contact: data.contact,
            remarks: data.remarks
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // add new customer

      updateCust(data) {
        return HTTP.put(
          `/customers/${data.id}`,
          {
            name: data.name,
            area: data.area,
            seller: data.seller,
            contact: data.contact,
            remarks: data.remarks
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // update customer

      deleteCust(data) {
        return HTTP.delete(`/customers/${data.id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      } // delete customer
    }; // export

    const saleApi = {
      fetchSales() {
        return HTTP.get(`/sales`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      }, // get all sales

      addSale(data) {
        return HTTP.post(
          `/sales`,
          {
            date: data.date,
            customer: data.customer,
            seller: data.seller,
            item: data.item,
            payments: data.payments,
            remarks: data.remarks
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // add new sale

      updateSale(data) {
        return HTTP.put(
          `/sales/${data.id}`,
          {
            date: data.date,
            customer: data.customer,
            seller: data.seller,
            item: data.item,
            payments: data.payments,
            remarks: data.remarks
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // update sale

      deleteSale(data) {
        return HTTP.delete(`/sales/${data.id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      } // delete sale
    }; // export

    const expensesApi = {
      fetchMaintenance() {
        return HTTP.get(`/maintenance`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      }, // get all items

      addMaintenance(data) {
        return HTTP.post(
          `/maintenance`,
          {
            date: data.date,
            employee: data.employee,
            remarks: data.remarks,
            amount: data.amount
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // add new item

      updateMaintenance(data) {
        return HTTP.put(
          `/maintenance/${data.id}`,
          {
            date: data.date,
            employee: data.employee,
            remarks: data.remarks,
            amount: data.amount
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
            }
          }
        );
      }, // update selected

      deleteMaintenance(data) {
        return HTTP.delete(`/maintenance/${data.id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTY2OTI5NDY0MH0.8DOGMll8Eq5RG0DbQAvd3xKlVYmvYNxxYSOExcUxuYQ`
          }
        });
      } // delete selected item
    }; // export

    var store = new Vuex.Store({
      state: {
        selected_id: null,
        select_year: new Date().getFullYear(),
        current_year: new Date().getFullYear(),
        show_add_form: false,
        show_update_form: false,
        show_update_icon: false,
        show_delete_button: false
      },
      getters: {},
      actions: {
        showAddForm({ commit }) {
          commit('SHOW_ADD_FORM');
        },

        showUpdateForm({ commit }, id) {
          commit('SHOW_UPDATE_FORM', id);
        },

        showUpdateIcon({ commit }) {
          commit('SHOW_UPDATE_ICON');
        },

        showDeleteButton({ commit }) {
          commit('SHOW_DELETE_BUTTON');
        },

        cancelButton({ commit }) {
          commit('HIDE_FORM');
        }
      },
      mutations: {
        SHOW_ADD_FORM: (state) => {
          state.show_add_form = true;
          state.show_update_form = false;
          state.show_update_icon = false;
          state.show_delete_button = false;
          state.selected_id = null;
        },
        SHOW_UPDATE_FORM: (state, id) => {
          state.show_add_form = false;
          state.show_update_form = true;
          state.show_update_icon = false;
          state.show_delete_button = false;
          state.selected_id = id;
        },
        SHOW_UPDATE_ICON: (state) => {
          state.show_add_form = false;
          state.show_update_form = false;
          state.show_update_icon = true;
          state.show_delete_button = false;
          state.selected_id = null;
        },
        SHOW_DELETE_BUTTON: (state) => {
          state.show_add_form = false;
          state.show_update_form = false;
          state.show_update_icon = false;
          state.show_delete_button = true;
          state.selected_id = null;
        },
        HIDE_FORM: (state) => {
          state.show_add_form = false;
          state.show_update_form = false;
          state.show_update_icon = false;
          state.show_delete_button = false;
          state.selected_id = null;
        }
      },
      modules: {
        customersModule,
        salesModule,
        expensesModule
      }
    });

    var app = new Vue({
      el: '#app',
      store,
      /* created() {
        this.getCustomersAction();
        this.getSalesAction();
        this.getExpensesAction();
      }, */

      data() {
        return {
          currentTab: 'Home',
          tabs: ['Home', 'Customers', 'Sales', 'Expenses', 'Financials']
        };
      },
      computed: {
        currentTabComponent: function () {
          return 'tab-' + this.currentTab.toLowerCase();
        }
      },
      /* methods: {
        ...Vuex.mapActions('customersModule', ['getCustomersAction']),
        ...Vuex.mapActions('salesModule', ['getSalesAction']),
        ...Vuex.mapActions('expensesModule', ['getExpensesAction'])
      } */
    });