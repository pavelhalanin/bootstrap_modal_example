class Modal {
    static id_root = "root_modal_111";
    static id_modal = "modal_wrapper_111";

    static main() {
        try {
            document.querySelectorAll(`#${this.id_root}`).forEach(e => e.remove());
            const DIV = document.createElement('div');
            DIV.setAttribute('id', Modal.id_root);
            DIV.innerHTML = /* html */ `
            <div class="modal fade" id="${Modal.id_modal}" data-bs-backdrop="static" tabindex="-1">
                <div class="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header"></div>
                        <div class="modal-body"></div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>
        `;

            document.body.appendChild(DIV);

            const modalElement = document.getElementById(this.id_modal);
            if (!modalElement) {
                return;
            }

            modalElement.addEventListener('shown.bs.modal', (event) => {
                this.onModalOpen(event);
            });

            modalElement.addEventListener('hidden.bs.modal', () => {
                this.onModalClose();
            });
        } catch (exception) {
            this.toastException(exception);
        }
    }

    static toastException(exception) {
        console.error(exception);
        alert(exception);
    }

    static openModal_byIdData(id_data) {
        try {
            const BUTTON = document.createElement('button');
            BUTTON.setAttribute('data-bs-toggle', 'modal');
            BUTTON.setAttribute('data-bs-target', `#${this.id_modal}`);
            BUTTON.setAttribute('custom__id', `${id_data}`);
            BUTTON.style.display = 'none';
            document.body.appendChild(BUTTON);
            BUTTON.click();
            BUTTON.remove();
        } catch (exception) {
            this.toastException(exception);
        }
    }

    static onModalOpen(event) {
        try {
            const ID_DATA = event.relatedTarget.getAttribute('custom__id');
            this.renderModal_byIdData(ID_DATA);
        } catch (exception) {
            this.toastException(exception);
        }
    }

    static onModalClose() {
        try {
            const DIV = document.getElementById(this.id_modal);
            if (!DIV) {
                return;
            }

            const DIALOG = DIV.querySelector('.modal-dialog');
            if (!DIALOG) {
                return;
            }

            DIALOG.innerHTML = /* html */ `
                <div class="modal-content">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div> 
            `;
        } catch (exception) {
            this.toastException(exception);
        }
    }

    static renderModal_byIdData(id_data) {
        try {
            const DIV = document.getElementById(this.id_modal);
            if (!DIV) {
                return;
            }

            const DIALOG = DIV.querySelector('.modal-dialog');
            if (!DIALOG) {
                return;
            }

            DIALOG.innerHTML = /* html */ `
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Data with id = ${id_data}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam ipsum eveniet sunt excepturi culpa dolorem suscipit veritatis labore quidem consequatur aperiam nobis est praesentium voluptatibus sequi molestiae, commodi sapiente amet nemo officia incidunt? Voluptas, dolorum a impedit saepe cumque laudantium consequatur repudiandae hic ab facere, assumenda blanditiis, nesciunt culpa unde obcaecati? Voluptatem sequi atque tenetur quaerat labore, animi necessitatibus delectus earum assumenda, dolores aut explicabo, vitae distinctio. Rem eum modi minus, necessitatibus maxime molestias quas repellat eius, illo porro suscipit reprehenderit omnis atque nihil labore expedita quam, quos asperiores possimus nostrum. Nisi eius error minima, nostrum soluta ad voluptas provident repellendus illum harum libero iste vero officiis tempore asperiores eaque repudiandae. Doloremque in amet, commodi at voluptatibus quos quasi molestias vel nisi reprehenderit nostrum qui et accusantium odio deserunt soluta illo porro. Aliquam voluptate, nulla accusamus consequatur dolor vel quasi quibusdam error libero in quas obcaecati fuga deleniti, assumenda recusandae culpa omnis? Eveniet, excepturi exercitationem, dolor totam, officiis neque culpa temporibus pariatur mollitia quae harum ea ex eaque. Reiciendis labore maiores, reprehenderit excepturi ab aliquam ipsum voluptatibus laborum soluta numquam, perferendis suscipit perspiciatis? Veritatis maxime blanditiis consequatur quae ad quia vero nihil, ex hic ipsum suscipit corrupti! Nulla suscipit officiis iste sit, vel deserunt similique magni delectus, laudantium reiciendis odio numquam quis ipsa labore aliquid. Iure minus optio omnis. Est officiis necessitatibus provident error beatae quos distinctio magnam dolorum expedita odit eius, sed perspiciatis dolores eveniet animi, obcaecati accusantium qui, natus ipsa voluptatem minima reprehenderit! Aut ea sunt dolor? Excepturi aliquam dolor beatae tenetur illum incidunt aliquid veniam itaque? Quaerat enim laboriosam rerum laudantium ea ipsam dolorem saepe esse fuga, incidunt corrupti accusantium at animi eligendi itaque amet explicabo vitae molestias, atque eveniet. Optio illum perferendis quasi velit sint et maxime voluptatem hic odio ea veniam nemo, assumenda laudantium esse in facilis quia? Qui voluptatum quam vero animi suscipit quia illo est consequuntur amet corporis deleniti voluptas dicta atque, natus sed, odit perspiciatis earum, autem fugit voluptates omnis inventore accusantium. Quae nulla velit sequi, atque quod necessitatibus id esse eum numquam facilis, perspiciatis sapiente voluptate odit. Aut nobis ducimus soluta molestiae nostrum, cupiditate labore repellendus dignissimos tempora totam minima sint impedit! Sint in neque animi quibusdam quaerat suscipit repellendus obcaecati, dolores aliquam quidem ex! Repudiandae delectus id officia libero deserunt fugiat ab, itaque eos a iusto, iure debitis eius possimus consectetur atque facilis nobis quas magnam rem eveniet consequuntur! Voluptatibus illo incidunt commodi maxime! Ut beatae, rem minima at odio saepe repellat, iure sapiente dolorum perferendis voluptates qui, excepturi a facilis eum expedita consequuntur suscipit. Optio consequuntur fugiat libero molestias neque, cum, cumque enim molestiae veritatis magnam sunt culpa error modi quidem? Aperiam voluptas excepturi labore sint cum cumque neque placeat mollitia autem illo tenetur ipsam laboriosam magnam, sequi qui minima vitae ex quas rem omnis ducimus perspiciatis laborum? Repellat eum ea atque quo quidem quasi ipsum suscipit dolorem, vel ut deleniti nostrum? Eligendi corrupti obcaecati consequatur autem sint ut placeat neque in nesciunt incidunt dolor, doloribus dolore delectus cumque explicabo earum odio tempora quidem numquam. Nostrum perspiciatis eligendi natus quos? Impedit veritatis culpa doloremque quidem magnam obcaecati provident iste nihil ex eveniet aut ipsa ducimus ea possimus quae explicabo voluptas, reiciendis placeat! Quod eligendi nobis ex, temporibus harum quam laboriosam, tempora modi sit alias est vero repellendus ad molestias laudantium corporis! Aspernatur distinctio aliquid a dolorum ut deleniti sapiente saepe asperiores consequatur doloribus cumque facere exercitationem obcaecati necessitatibus mollitia aperiam dolores, ab modi vitae eligendi. Adipisci sint veniam officiis eveniet veritatis repellat at, quo in magnam hic impedit dignissimos amet quis, odio minima tempora labore non? Fugiat nesciunt optio possimus? Vero ipsum odit soluta corrupti, quam explicabo nulla tempore, error ab non, quo delectus suscipit facilis? Sit eveniet soluta aspernatur doloremque maxime excepturi natus error dolor rerum adipisci delectus, pariatur maiores iste, illo consequuntur? Dolorem veritatis corrupti soluta aperiam cupiditate reprehenderit commodi at ad! Possimus porro aperiam cum illum. Dolorum aliquam soluta ea voluptas consectetur qui recusandae temporibus excepturi dicta, error vel nesciunt rerum repudiandae nostrum eaque minima optio dolorem rem deserunt ducimus ex eum voluptates ab inventore! Accusamus eaque molestias ut minima eius, nobis harum cum, esse, adipisci aliquid sint laboriosam praesentium saepe! Natus vel culpa voluptas aliquam amet ex rerum commodi labore. Doloremque blanditiis aliquid perspiciatis repellendus vero, mollitia voluptates dolore a nobis fugiat tenetur praesentium qui voluptatibus excepturi animi. Itaque fuga sint modi dicta, sunt distinctio, labore, asperiores repellendus consequuntur ipsum culpa exercitationem cumque. Amet eveniet aliquid, illum voluptatem rem inventore molestias ut est commodi, veniam quisquam at reprehenderit animi architecto cumque tempora eius aperiam quis optio. Obcaecati soluta fugit facilis corporis possimus odio eligendi tenetur, atque, repellendus, vitae placeat praesentium natus nostrum perspiciatis aspernatur impedit reprehenderit nisi. Doloremque tempore expedita laborum, iusto possimus nostrum enim illo tenetur odit in assumenda quibusdam eius quaerat ipsam quam quia incidunt. Tempore placeat sed amet aut consequuntur cupiditate, laudantium harum, voluptas dolores quasi reiciendis obcaecati nam, numquam eveniet in hic enim itaque! Dolorum illo dolores voluptates, obcaecati doloremque nam voluptatum sint atque vel eum repellat quisquam? Aliquid hic, debitis eaque cumque aspernatur, consequatur quos rerum dolorum at labore laboriosam deleniti quaerat, ullam accusantium est libero inventore. Eveniet, dicta? Ipsa quaerat eaque et necessitatibus mollitia praesentium harum illum consectetur aut facilis, natus itaque fuga optio velit dolore, atque, beatae voluptatum pariatur cumque libero quas omnis eos. Ad, nobis! Alias vero tempora amet quibusdam voluptatibus, ipsum recusandae. Corrupti, dolore? Hic error omnis alias commodi rem, voluptates minima facere eius voluptate ea repudiandae quo sed in modi animi laboriosam optio! Incidunt numquam aliquam beatae, fugit repudiandae cupiditate iure molestiae consequuntur quae temporibus maiores. Vitae incidunt eligendi voluptatem rem consequatur enim perspiciatis dolores hic odio commodi possimus explicabo expedita cupiditate numquam corporis, vel neque praesentium natus aspernatur error facilis quaerat voluptas magnam. Veniam eos dolorem eaque autem esse illo maiores suscipit consequuntur excepturi laboriosam expedita consectetur ipsum sunt ut, in iure nesciunt voluptate assumenda corrupti hic. Fugit quae mollitia, voluptatem consequatur porro cum saepe explicabo consequuntur blanditiis ipsa atque amet vitae similique.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div> 
            `;
        } catch (exception) {
            this.toastException(exception);
        }
    }
}