class Message < ActiveRecord::Base
  attr_accessible :body, :sender, :read, :subject, :recipient

  scoped_search :on => :subject, :complete_value => :true
  scoped_search :on => :body, :rename => 'message', :complete_value => :true
  scoped_search :on => :sender, :rename => 'from',:complete_value => :true
  scoped_search :on => :recipient, :rename=> 'to', :complete_value => :true
  scoped_search :on => :read, :rename=> 'read', :complete_value => {:yes => true, :no => false}
  scoped_search :on => :read, :rename=> 'unread', :complete_value => {:yes => false, :no => true}

end
