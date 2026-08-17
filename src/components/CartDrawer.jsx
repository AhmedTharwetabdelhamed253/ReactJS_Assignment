import styled from "styled-components";

// Styled Components: every visual piece of this drawer is a styled element,
// defined once here and reused like a normal React component.

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(27, 27, 27, 0.4);
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 40;
`;

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: min(360px, 90vw);
  background: #fffdf8;
  box-shadow: -12px 0 30px rgba(27, 42, 65, 0.18);
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.25s ease;
  z-index: 50;
  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ece5d5;
`;

const DrawerTitle = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 20px;
  color: #1b2a41;
  margin: 0;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #6b6558;
`;

const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border-bottom: 1px solid #f2ede0;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 14px;
  color: #1b2a41;
  font-weight: 600;
`;

const ItemMeta = styled.span`
  font-size: 12px;
  color: #6b6558;
`;

const RemoveButton = styled.button`
  border: 1px solid #ece5d5;
  background: #fff;
  color: #a63446;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #fdf2f2;
    border-color: #a63446;
  }
`;

const EmptyMessage = styled.p`
  padding: 40px 20px;
  text-align: center;
  color: #6b6558;
  font-size: 14px;
`;

const DrawerFooter = styled.div`
  padding: 18px 20px 22px;
  border-top: 1px solid #ece5d5;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #1b2a41;
  margin-bottom: 12px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #1b2a41;
  color: #fff;
  border: none;
  padding: 11px 0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #2b405e;
  }
`;

// Reusable Component — receives all its data and handlers via Props
function CartDrawer({ isOpen, items, total, onClose, onRemove }) {
  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={onClose} />
      <Drawer $isOpen={isOpen} aria-hidden={!isOpen}>
        <DrawerHeader>
          <DrawerTitle>Your Cart</DrawerTitle>
          <CloseButton onClick={onClose} aria-label="Close cart">
            ✕
          </CloseButton>
        </DrawerHeader>

        {/* Ternary Operator: empty state vs. item list */}
        {items.length === 0 ? (
          <EmptyMessage>Your cart is empty. Add a few books to get started.</EmptyMessage>
        ) : (
          <ItemList>
            {/* .map(): render one row per cart item */}
            {items.map((item) => (
              <Item key={item.id}>
                <ItemInfo>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemMeta>
                    Qty {item.quantity} · ${item.finalPrice.toFixed(2)} each
                  </ItemMeta>
                </ItemInfo>
                <RemoveButton onClick={() => onRemove(item.id)}>Remove</RemoveButton>
              </Item>
            ))}
          </ItemList>
        )}

        {/* && Operator: footer with totals only shows when the cart has items */}
        {items.length > 0 && (
          <DrawerFooter>
            <TotalRow>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </TotalRow>
            <CheckoutButton>Checkout</CheckoutButton>
          </DrawerFooter>
        )}
      </Drawer>
    </>
  );
}

export default CartDrawer;
