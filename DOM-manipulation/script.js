const head1 = document.querySelector(".head1");
const head2 = document.querySelector(".head2");
const head3 = document.querySelector(".head3");
const para1 = document.querySelector(".para1");

console.log("head1",head1.textContent)
console.log(head2)
console.log(head3)
console.log(para1);
const vinit = document.createElement("p");
const result = document.body.append(vinit);
console.log("is unde ",result)
const clonedeep = head1.cloneNode()
clonedeep.textContent="hi bhai mai hu clone Original kaa";
console.log('clonedeep',clonedeep.textContent);
document.body.prepend(clonedeep)
const parentconsole = head1.parentNode;
// head1.parentNode.replaceChild(clonedeep,head1);
console.log(parentconsole)
// head2.parentNode.insertBefore(clonedeep, head2);
