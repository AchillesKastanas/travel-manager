import { IUser } from "@/types";
import CalendarIcon from "@assets/calendar.svg";
import Arriving from "@assets/arriving.svg";
import Departing from "@assets/departing.svg";
import Transfer from "@assets/transfer.svg";
import ProfileIcon from "@assets/profile.svg";
import IconBaby from "@assets/icon-baby.svg";
import IconEarlyCheckIn from "@assets/icon-earlycheckin.svg";
import IconEmpty from "@assets/icon-empty.svg";
import IconLateCheckOut from "@assets/icon-latecheckout.svg";
import IconTransfer from "@assets/icon-transfer.svg";

import { formatUserDate } from "@/components/TransfersGroup/utils/formatUserDate";

import "./TransfersTableMobile.scss";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import ProfilePopup from "@/components/ProfilePopup/ProfilePopup";
import { useModal } from "@/contexts/ModalContext/ModalContext";

interface ITransferTableMobileProps {
  groupedUserEntries: [string, IUser[]][];
}

const loadStatusIcon = (category: string) => {
  switch (category) {
    case "Arrival":
      return <Arriving />;
    case "Departure":
      return <Departing />;
    case "In City":
      return <Transfer />;
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
            <CalendarIcon />
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
                          <IconEarlyCheckIn />
                        </IconWrapper>
                      )}
                      {user.late_checkout && (
                        <IconWrapper>
                          <IconLateCheckOut />
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
                      <ProfileIcon />
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
