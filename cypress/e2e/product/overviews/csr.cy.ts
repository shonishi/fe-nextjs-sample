describe('CsrPage', () => {
  it('初期表示で正常にレンダリングされること', () => {
    cy.visit('http://localhost:3000/product/overviews/csr');
    // APIレスポンスが反映されていることを確認
    cy.findByText('おもちゃ');
  });

  it('色をクリックした場合、その色が選択状態になること', () => {
    cy.visit('http://localhost:3000/product/overviews/csr');
    // 初期表示時の非同期処理の完了を待ち合わせる
    cy.findByText('おもちゃ');
    // クリック前はデフォルトのものが選択状態
    cy.findByText('Pale yellow')
      .parent()
      .should('have.attr', 'aria-checked', 'true');
    cy.findByText('Dark yellow').parent().click();
    // クリック後はクリックしたものが選択状態
    cy.findByText('Dark yellow')
      .parent()
      .should('have.attr', 'aria-checked', 'true');
  });

  it('サイズをクリックした場合、そのサイズが選択状態になること', () => {
    cy.visit('http://localhost:3000/product/overviews/csr');
    // 初期表示時の非同期処理の完了を待ち合わせる
    cy.findByText('おもちゃ');
    // クリック前はデフォルトのものが選択状態
    cy.findByText('XS').parent().should('have.attr', 'aria-checked', 'true');
    cy.findByText('M').parent().click();
    // クリック後はクリックしたものが選択状態
    cy.findByText('M').parent().should('have.attr', 'aria-checked', 'true');
  });
});
