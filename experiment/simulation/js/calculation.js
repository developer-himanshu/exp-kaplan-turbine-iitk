var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");
var t15=document.getElementById("t15");
var t16=document.getElementById("t16");
var t17=document.getElementById("t17");
var t18=document.getElementById("t18");
var t19=document.getElementById("t19");
var t20=document.getElementById("t20");
var t21=document.getElementById("t21");
var t22=document.getElementById("t22");
var t23=document.getElementById("t23");
var t24=document.getElementById("t24");
var t25=document.getElementById("t25");
var t26=document.getElementById("t26");
var t27=document.getElementById("t27");
var t28=document.getElementById("t28");
var t29=document.getElementById("t29");
var t30=document.getElementById("t30");
var t31=document.getElementById("t31");
var t32=document.getElementById("t32");
var t33=document.getElementById("t33");
var t34=document.getElementById("t34");
var t35=document.getElementById("t35");
var t36=document.getElementById("t36");
var t37=document.getElementById("t37");
var t38=document.getElementById("t38");
var t39=document.getElementById("t39");
var t40=document.getElementById("t40");
var t41=document.getElementById("t41");
var t42=document.getElementById("t42");
var t43=document.getElementById("t43");
var t44=document.getElementById("t44");
var t45=document.getElementById("t45");
var t46=document.getElementById("t46");
var t47=document.getElementById("t47");
var t48=document.getElementById("t48");
var t49=document.getElementById("t49");
var t50=document.getElementById("t50");
var t51=document.getElementById("t51");
var t52=document.getElementById("t52");
var t53=document.getElementById("t53");
var t54=document.getElementById("t54");
var t55=document.getElementById("t55");
var t56=document.getElementById("t56");
var t57=document.getElementById("t57");
var t58=document.getElementById("t58");
var t59=document.getElementById("t59");
var t60=document.getElementById("t60");
var t61=document.getElementById("t61");
var t62=document.getElementById("t62");
var t63=document.getElementById("t63");
var t64=document.getElementById("t64");
var t65=document.getElementById("t65");
var t66=document.getElementById("t66");
var t67=document.getElementById("t67");
var t68=document.getElementById("t68");
var t69=document.getElementById("t69");
var t70=document.getElementById("t70");
var t71=document.getElementById("t71");
var t72=document.getElementById("t72");
var t73=document.getElementById("t73");
var t74=document.getElementById("t74");
var t75=document.getElementById("t75");
var t76=document.getElementById("t76");
var t77=document.getElementById("t77");
var t78=document.getElementById("t78");
var t79=document.getElementById("t79");
var t80=document.getElementById("t80");
var t81=document.getElementById("t81");
var t82=document.getElementById("t82");
var t83=document.getElementById("t83");
var t84=document.getElementById("t84");
var t85=document.getElementById("t85");
var t86=document.getElementById("t86");
var t87=document.getElementById("t87");
var t88=document.getElementById("t88");
var t89=document.getElementById("t89");
var t90=document.getElementById("t90");
var t91=document.getElementById("t91");
var t92=document.getElementById("t92");
var t93=document.getElementById("t93");
var t94=document.getElementById("t94");
var t95=document.getElementById("t95");
var t96=document.getElementById("t96");
var t97=document.getElementById("t97");
var t98=document.getElementById("t98");
var t99=document.getElementById("t99");
var t100=document.getElementById("t100");
var t101=document.getElementById("t101");
var t102=document.getElementById("t102");
var t103=document.getElementById("t103");
var t104=document.getElementById("t104");
var t105=document.getElementById("t105");
var t106=document.getElementById("t106");
var t107=document.getElementById("t107");
var t108=document.getElementById("t108");
var t109=document.getElementById("t109");
var t110=document.getElementById("t110");
var t111=document.getElementById("t111");
var t112=document.getElementById("t112");
var t113=document.getElementById("t113");
var t114=document.getElementById("t114");
var t115=document.getElementById("t115");
var t116=document.getElementById("t116");
var t117=document.getElementById("t117");
var t118=document.getElementById("t118");
var t119=document.getElementById("t119");
var t120=document.getElementById("t120");
var t121=document.getElementById("t121");
var t122=document.getElementById("t122");
var t123=document.getElementById("t123");
var t124=document.getElementById("t124");
var t125=document.getElementById("t125");
var t126=document.getElementById("t126");
var t127=document.getElementById("t127");
var t128=document.getElementById("t128");
var t129=document.getElementById("t129");
var t130=document.getElementById("t130");
var t131=document.getElementById("t131");
var t132=document.getElementById("t132");
var t133=document.getElementById("t133");
var t134=document.getElementById("t134");
var t135=document.getElementById("t135");
var t136=document.getElementById("t136");
var t137=document.getElementById("t137");
var t138=document.getElementById("t138");
var t139=document.getElementById("t139");
var t140=document.getElementById("t140");

function calculate() {
    const tables = ["tab1", "tab2", "tab3", "tab4"];
    let isValid = true;

    tables.forEach(tableId => {
        const inputs = document.querySelectorAll(`#${tableId} input`);
        inputs.forEach(input => {
            if (input.value === "") {
                isValid = false;
                return;
            }
        });
    });

    if (isValid) {
        document.getElementById("check-button").disabled = false;
    } else {
        alert("Please fill in all input fields or enter valid values.");
    }
}

function checkYourResult() {
    let flag = true;
    const tables = document.querySelectorAll(".table-container");

    tables.forEach(table => {
        const inputs = table.querySelectorAll("input");
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            const expectedValue = parseFloat(input.dataset.expected);

            if (value !== expectedValue) {
                input.style.color = "red";
                flag = false;
            }
        });
    });

    if (flag) {
        for (let i = 0; i < 5; i++) {
            confetti();
        }
        alert("Congratulations! You have successfully completed the experiment.");
    } else {
        document.querySelector(".result-table").style.display = "flex";
    }
}


    