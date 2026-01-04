// Convert HTML string to valid JSX
// export default function Pricing() {
//   return `<h2 class="title">Simple no-tricks pricing</h2>
//       <hr>
//       <a href="/buy" class="button">
//         Buy Now <span aria-hidden="true">→</span>
//       </a>`;
// }


export default function Pricing() {
    return(
        <>
            <h2 class="title">Simple no-tricks pricing</h2>
            <hr /> // this tag needs to be self-closing
             <a href="/buy" className="button"> // instead of class use className
                Buy Now <span aria-hidden="true">→</span>
            </a>`
        </>
    );
}
