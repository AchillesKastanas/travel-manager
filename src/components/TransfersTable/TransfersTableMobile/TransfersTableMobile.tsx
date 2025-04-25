import { IUser } from "@/types";
import { formatUserDate } from "@/components/TransfersGroup/utils/formatUserDate";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import ProfilePopup from "@/components/ProfilePopup/ProfilePopup";
import { useModal } from "@/contexts/ModalContext/ModalContext";

import {
  IconArriving,
  IconBaby,
  IconCalendar,
  IconDeparting,
  IconEarlyCheckin,
  IconEmpty,
  IconInCity,
  IconLateCheckout,
  IconProfile,
  IconTransfer,
} from "@/assets";

import "./TransfersTableMobile.scss";

interface ITransferTableMobileProps {
  groupedUserEntries: [string, IUser[]][];
}

const loadStatusIcon = (category: string) => {
  switch (category) {
    case "Arrival":
      return <IconArriving />;
    case "Departure":
      return <IconDeparting />;
    case "In City":
      return <IconInCity />;
  }
};

const TransfersTableMobile = ({
  groupedUserEntries,
}: ITransferTableMobileProps) => {
  const { openModal } = useModal();

  const handleRowClick = (user: IUser) => {
    openModal(<ProfilePopup user={user} />);
  };

  return (
    <div className="mobile-transfers-table-wrapper">
      {groupedUserEntries.map(([label, users], idx) => (
        <div key={`${label}-${idx}`} className="transfers-group">
          <div className="group-label">
            <IconCalendar />
            <span>{label}</span>
          </div>
          {users.map((user, userIdx) => (
            <div
              key={`${label}-${userIdx}`}
              className="transfer-card"
              onClick={() => handleRowClick(user)}
            >
              <div className="card-content">
                <div className="left-section">
                  <div className="transfer-status">
                    <span
                      className={`status-label ${user.category?.toLowerCase()}`}
                    >
                      {loadStatusIcon(user.category)}
                      <div>{user.category}</div>
                    </span>
                  </div>
                  <h4 className="traveller-name">
                    {`${user.traveler_first_name} ${user.traveler_last_name}`}
                  </h4>

                  <div className="info-block">
                    <div className="info-label">PROPERTY</div>
                    {/* Unclear what Property is */}
                    <div className="info-value">{"Valley Road"}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">ARRIVAL TIME</div>
                    <div className="info-value">
                      {formatUserDate(label, user.datetime)}
                    </div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">FROM</div>
                    <div className="info-value">{user.location_title}</div>
                  </div>

                  <div className="info-block">
                    <div className="info-label">OPPORTUNITIES</div>
                    <div className="opportunities-data-wrapper">
                      {user.babies && (
                        <IconWrapper>
                          <IconBaby />
                        </IconWrapper>
                      )}
                      {user.return_transfer && (
                        <IconWrapper>
                          <IconTransfer />
                        </IconWrapper>
                      )}
                      {user.early_checkin && (
                        <IconWrapper>
                          <IconEarlyCheckin />
                        </IconWrapper>
                      )}
                      {user.late_checkout && (
                        <IconWrapper>
                          <IconLateCheckout />
                        </IconWrapper>
                      )}
                      {!user.babies &&
                        !user.return_transfer &&
                        !user.early_checkin &&
                        !user.late_checkout && (
                          <IconWrapper>
                            <IconEmpty />
                          </IconWrapper>
                        )}
                    </div>
                  </div>
                </div>

                <div className="right-section">
                  <IconWrapper>
                    {user.traveler_photo ? (
                      <img src={user.traveler_photo} />
                    ) : (
                      <IconProfile />
                    )}
                  </IconWrapper>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TransfersTableMobile;
