function laddiPost() {
  if (!window.gotName) {
    let e = (function e(r) {
        return r.hasOwnProperty("GetStudentID")
          ? r
          : r.parent == r
          ? null
          : e(r.parent);
      })(this)
        .SCORM2004_GetStudentName()
        .split(","),
      r = e[1] + " " + e[0];
    window.player.SetVar("nameLMS", r), (window.gotName = !0);
  }
  let e = new Date(),
    r = window.player.GetVar("nameLMS"),
    o = window.player.GetVar("Name"),
    a = window.player.GetVar("2_7_Progress_Overall"),
    _ = window.player.GetVar("2_7_Progress_Our_World_of_Beverages"),
    n = window.player.GetVar("2_7_Progress_Legislation_and_Claims"),
    t = window.player.GetVar("2_7_Progress_Beverage_Technology"),
    s = window.player.GetVar("2_7_Progress_Micro_for_Beverages"),
    l = window.player.GetVar("2_7_Progress_Packaging_of_Beverages"),
    w = window.player.GetVar("2_7_Progress_Workbook"),
    d = window.player.GetVar("2_7_Progress_Allergen_Awareness"),
    i = window.player.GetVar("2_7_Progress_Intro_to_Food_Safety_And_Quality"),
    p = window.player.GetVar("2_7_Progress_Intro_to_HACCP"),
    g = window.player.GetVar(
      "2_4_Role_Brewing_Beverages_NoPack_NoIntroFSQ_NoHACCP"
    ),
    c = window.player.GetVar(
      "2_4_Role_Packaging_NoBevTech_No_Micro_NoWorkbook_NoIntroFSQ_NoHACCP"
    ),
    y = window.player.GetVar(
      "2_4_Role_Support_Brew_Bev_Pack_NoIntroFSQ_NoHACCP"
    ),
    P = window.player.GetVar(
      "2_4_Role_Non_SC_NoBevTech_NoWorkbook_NoMicro_NoPack"
    );
  axios({
    method: "POST",
    url: "https://laddi.app/user",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    data: {
      clientId:
        "1c8dbddf9165922df29773c7b440a7e2322ca22d41cf3d53affdfc48a1e453f1",
      courseName: "Beverage Gold",
      date: e,
      nameLMS: r,
      nameEntry: o,
      progressOverall: a,
      progressOWOB: _,
      progressLaC: n,
      progressBT: t,
      progressMfB: s,
      progressPoB: l,
      progressWorkbook: w,
      progressAA: d,
      progressIntroFSaQ: i,
      progressIntroH: p,
      rbb: g,
      rpn: c,
      rsb: y,
      rns: P,
    },
  })
    .then(function (e) {
      console.log(e);
    })
    .catch(function (e) {
      console.log(e);
    });
}
